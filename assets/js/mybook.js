async function getBook() {
    try {
        const response = await fetch(`../data/buku.json`);
        if (!response.ok) {
            throw new Error(`Failed to fetch component: ${response.status}`);
        }
        const d = await response.text();
        const y = JSON.parse(d).buku;
        // console.log(y[0]);

        for (i = 0; i < y.length; i++) {
            // Create parent container
            const parentDiv = document.createElement('a');
            parentDiv.id = `buku-${y[(y.length - 1) - i].id}`;
            parentDiv.classList.add('col-lg-4', 'col-md-6', 'grid-item', `${y[(y.length - 1) - i].jenis}`);
            parentDiv.href = `../../buku/${y[(y.length - 1) - i].link}`;

            // Create portfolio item wrapper
            const portfolioItemWrapper = document.createElement('div');
            portfolioItemWrapper.classList.add('portfolio-item-wrapper');

            // Create portfolio image
            const portfolioImg = document.createElement('div');
            portfolioImg.classList.add('portfolio-img');
            const img = document.createElement('img');
            img.src = y[(y.length - 1) - i].img;
            img.alt = '';
            portfolioImg.appendChild(img);

            // Create portfolio overlay
            const portfolioOverlay = document.createElement('div');
            portfolioOverlay.classList.add('portfolio-overlay');

            // Create overlay content
            const overlayContent = document.createElement('div');
            overlayContent.classList.add('overlay-content');
            const span = document.createElement('span');
            span.textContent = y[(y.length - 1) - i].judul;
            const h4 = document.createElement('h4');
            if (y[(y.length - 1) - i].harga.hardcover === "-") {
                h4.textContent = y[(y.length - 1) - i].harga.softcover;
            } else {
                h4.textContent = y[(y.length - 1) - i].harga.hardcover;
            }
            overlayContent.appendChild(span);
            overlayContent.appendChild(h4);

            // Append overlay content to overlay
            portfolioOverlay.appendChild(overlayContent);

            // Append portfolio image and overlay to portfolio item wrapper
            portfolioItemWrapper.appendChild(portfolioImg);
            portfolioItemWrapper.appendChild(portfolioOverlay);

            // Append portfolio item wrapper to parent container
            parentDiv.appendChild(portfolioItemWrapper);

            // Find the element with ID "bukuRupakata"
            const bukuRupakataElement = document.getElementById("bukuRupakata");

            // Append the parent container to the "bukuRupakata" element
            bukuRupakataElement.appendChild(parentDiv);

        }
    } catch (error) {
        console.error(error);
    }
}

getBook();