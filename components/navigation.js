class Navigation extends HTMLElement {
    static observedAttributes = ["job"]

    connectedCallback() {
        this.innerHTML = `
        <a class="navigation-button about" href="../index.html">
            <img class="navigation-icon" src="../img/icons/about.png" alt="about icon">
            About/Contact
        </a>
        <a class="navigation-button illustrator" href="../illustrator/commission.html">
            <img class="navigation-icon" src="../img/icons/illustrator.png" alt="about icon">
            Illustrator</a>
        <a class="navigation-button gamedev" href="../gamedev/index.html">
            <img class="navigation-icon" src="../img/icons/softwaredev.png" alt="about icon">
            Game Engineer</a>
        <a class="navigation-button softwaredev">
            <img class="navigation-icon" src="../img/icons/gamedev.png" alt="about icon">
            Software Developer</a>
        `;

        switch (this.attributes.job.value) {
            case "about":
                document.querySelector(".navigation-button.about").classList.add("selected");
                break;
            case "illustrator":
                document.querySelector(".navigation-button.illustrator").classList.add("selected");
                break;
            case "gamedev":
                document.querySelector(".navigation-button.gamedev").classList.add("selected");
                break;
            case "softwaredev":
                document.querySelector(".navigation-button.softwaredev").classList.add("selected");
                break;
            default:
                return;
        }
    }
}

customElements.define("navigation-tabs", Navigation);