async function addComponent(id, comp) {
    try {
        const myHeader = document.getElementById(id);
        const response = await fetch(`./component/${comp}.html`);

        if (!response.ok) {
            throw new Error(`Failed to fetch component: ${response.status}`);
        }

        const htmlContent = await response.text();
        myHeader.innerHTML = htmlContent;
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    addComponent("myHeader", "navbar");
    addComponent("myFooter", "footer");
});