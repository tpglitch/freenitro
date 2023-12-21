// God this technology is funny cause OperaGX can't program securely

let reqRes = async () => {
    const response = await fetch('/api/nitro');
    const res2 = await response.json();
    document.querySelector('a').href = res2.link;
    document.querySelector('a').innerText = 'Your Nitro Link!';
    console.log(res2.link);
}

reqRes()