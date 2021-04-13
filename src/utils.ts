export function parseRequestUrl(){
    const url =window.location.hash.toLocaleLowerCase().split("/");
    return {
        resource:url[1],
        id:url[2],
        methodHttp:url[3]
    }
}