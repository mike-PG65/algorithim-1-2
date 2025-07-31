function dot_product(v1, v2, ps) {
    ps.value = 0;
    for (let i = 0; i < v1.length; i++) {
        ps.value += v1[i] * v2[i];
    }
}
