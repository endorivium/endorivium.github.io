class SocMedLinks extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
    <a class="link-button" href="https://www.linkedin.com/in/julia-ihrenberger/" target="_blank"
       style="background-color: cadetblue">
        <img class="link-icon" src="/img/icons/linkedin_logo.png" alt="about icon">
        <span style="margin: auto">LinkedIn</span>
    </a>
    <a class="link-button" href="https://endorivium.itch.io/" target="_blank" style="background-color: #3e717a">
        <img class="link-icon" src="/img/icons/itchio_logo.svg" alt="about icon">
        <span style="margin: auto">Itch.io</span>
    </a>
    <a class="link-button" href="mailto:jihrenberger@gmail.com"
       style="background-color: darkcyan">
        <img class="link-icon" src="/img/icons/mail.png" alt="about icon">
        <span style="margin: auto">Email</span>
    </a>
        `;
    }
}

customElements.define("socmed-links", SocMedLinks);