export const getCartFromLS = () => {
    const data = localStorage.getItem("cart")

    return {
        data: data ? JSON.parse(data) : [],
        sum: data
            ? JSON.parse(data).reduce(
                  (acc: number, cur: any) => acc + cur.count * cur.price,
                  0
              )
            : 0,
    }
    // return data ? JSON.parse(data) : []
}
