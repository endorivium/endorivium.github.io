class NavigationIllustrator extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <a class="navigation-button about" href="../index.html">
            <img class="navigation-icon" src="../img/icons/about.png" alt="about icon">
            About/Contact
        </a>
        <a class="navigation-button illustrator selected">
            <img class="navigation-icon" src="../img/icons/illustrator.png" alt="about icon">
            Illustrator</a>
        <a class="navigation-button engineer">
            <img class="navigation-icon" src="../img/icons/softwaredev.png" alt="about icon">
            Game Engineer</a>
        <a class="navigation-button developer">
            <img class="navigation-icon" src="../img/icons/gamedev.png" alt="about icon">
            Software Developer</a>
        `;
    }
}

class NavigationAbout extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <a class="navigation-button about selected">
            <img class="navigation-icon" src="/img/icons/about.png" alt="about icon">
            About/Contact
        </a>
        <a class="navigation-button illustrator" href="illustrator/commission.html">
            <img class="navigation-icon" src="/img/icons/illustrator.png" alt="about icon">
            Illustrator</a>
        <a class="navigation-button engineer">
            <img class="navigation-icon" src="/img/icons/softwaredev.png" alt="about icon">
            Game Engineer</a>
        <a class="navigation-button developer">
            <img class="navigation-icon" src="/img/icons/gamedev.png" alt="about icon">
            Software Developer</a>
        `;
    }
}

customElements.define("navigation-illustrator", NavigationIllustrator);
customElements.define("navigation-about", NavigationAbout);