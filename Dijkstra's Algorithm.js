function dijkstra(graph, start) {
    const distances = {};
    const visited = {};
    const queue = [];

    // Initialize distances
    for (let vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;

    queue.push({ vertex: start, distance: 0 });

    while (queue.length) {
        // Sort the queue based on distances
        queue.sort((a, b) => a.distance - b.distance);

        // Get the vertex with the shortest distance
        const { vertex, distance } = queue.shift();

        // If vertex is already visited, skip
        if (visited[vertex]) continue;

        // Mark vertex as visited
        visited[vertex] = true;

        // Visit adjacent vertices
        for (let neighbor in graph[vertex]) {
            const weight = graph[vertex][neighbor];
            const totalDistance = distance + weight;

            // Update distance if shorter path found
            if (totalDistance < distances[neighbor]) {
                distances[neighbor] = totalDistance;
                queue.push({ vertex: neighbor, distance: totalDistance });
            }
        }
    }

    return distances;
}