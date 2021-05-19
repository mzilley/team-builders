<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
jQuery(document).ready(function ($) {
  const templates = ["footer", "navbar", "contactus", "footerscripts"];

  templates.forEach((template) => {
    $(`#${template}`).load(`templates/${template}.html`);
  });
});