let filterBy = (ar, selector) => ar.filter( elem => typeof(elem) != selector );
filterBy(['hello', 'world', 23, '23', null], 'string'); // [23, null]
