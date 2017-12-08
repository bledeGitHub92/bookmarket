function ajax(method, url, field, mode = true) {
    return new Promise(resolve => {
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            var res = '';
            if (xhr.readyState >= 4 && (xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                res = xhr.responseText;
                if (field) {
                    res = JSON.parse(xhr.responseText)[field];
                }
                resolve(res);
            } else {
                // alert(xhr.status);
            }
        };

        xhr.open(method, url, mode);
        xhr.send(null);
    });
};

ajax.get = async function (url, field) {
    return await ajax('get', url, field);
};
ajax.post = async function (url) {
    return await ajax('post', url);
};

export default ajax;