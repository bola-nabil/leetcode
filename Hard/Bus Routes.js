var numBusesToDestination = function (routes, source, target) {
    let stopRoutes = new Map();

    for (let route = 0; route < routes.length; route++) {
        for (let stop of routes[route]) {
        if (!stopRoutes.has(stop)) stopRoutes.set(stop, new Set());
            stopRoutes.get(stop).add(route);
        }
    }

    let stopsToVisit = new Queue();
    stopsToVisit.enqueue([source, 0]);

    let visitedStops = new Set();
    visitedStops.add(source);
    let visitedRoutes = new Array(routes.length);

    while (!stopsToVisit.isEmpty()) {
        let stop = stopsToVisit.front()[0],
        bus = stopsToVisit.front()[1];
        stopsToVisit.dequeue();

        if (stop === target) return bus;

        for (let route of stopRoutes.get(stop)) {
        if (visitedRoutes[route]) continue;

        for (let stop of routes[route]) {
            if (!visitedStops.has(stop)) {
            visitedStops.add(stop);
            stopsToVisit.enqueue([stop, bus + 1]);
        }
    }
        visitedRoutes[route] = true;
        }
    }

    return -1;
};
