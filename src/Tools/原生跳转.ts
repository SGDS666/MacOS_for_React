const test = () => {
    return null
}
const 原生跳转 = (v: string) => {
    return () => {
        // alert(`跳转到${v}`);
        window.location.assign(`${window.location.origin}/simple/${v}`)
        
        
    }
}

export default  原生跳转