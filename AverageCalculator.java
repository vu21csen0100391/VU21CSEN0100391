@RestController
@RequestMapping("/numbers")
public class AverageCalculatorController {

    private final int WINDOW_SIZE = 10;
    private final Queue<Integer> window = new LinkedList<>();
    private final RestTemplate restTemplate = new RestTemplate();

    @GetMapping("/{numberId}")
    public ResponseEntity<Map<String, Object>> getNumbers(@PathVariable("numberId") String numberId) {
        long startTime = System.currentTimeMillis();
        Map<String, Object> response = new HashMap<>();
        List<Integer> numbersFromApi = fetchNumbersFromApi(numberId);

        synchronized (this) {
            response.put("windowPrevState", new ArrayList<>(window));

            for (int num : numbersFromApi) {
                if (!window.contains(num)) {
                    if (window.size() >= WINDOW_SIZE) {
                        window.poll();
                    }
                    window.offer(num);
                }
            }

            response.put("windowCurrState", new ArrayList<>(window));
            double avg = calculateAverage();
            response.put("avg", avg);
        }

        response.put("numbers", numbersFromApi);
        long duration = System.currentTimeMillis() - startTime;
        if (duration > 500) {
            return ResponseEntity.status(HttpStatus.REQUEST_TIMEOUT).build();
        }

        return ResponseEntity.ok(response);
    }

    private List<Integer> fetchNumbersFromApi(String numberId) {
        String url = getApiUrl(numberId);
        try {
            ResponseEntity<List<Integer>> response = restTemplate.exchange(url, HttpMethod.GET, null, new ParameterizedTypeReference<List<Integer>>() {});
            if (response.getStatusCode().is2xxSuccessful()) {
                return response.getBody();
            }
        } catch (Exception e) {
        }
        return Collections.emptyList();
    }

    private String getApiUrl(String numberId) {
        return "http://example.com/api/" + numberId;
    }

    private double calculateAverage() {
        if (window.isEmpty()) {
            return 0.0;
        }
        double sum = 0;
        for (int num : window) {
            sum += num;
        }
        return sum / window.size();
    }
}