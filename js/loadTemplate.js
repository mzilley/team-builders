jQuery(document).ready(function($) {
  const templates = ["footer", "navbar", "contactus", "footerscripts"];

  templates.forEach((template) => {
    $(`#${template}`).load(`templates/${template}.html`);
  });
});