<script>
  document.getElementById('newsletter').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting normally
    const email = document.getElementById('email').value;
    alert(`Thank you for subscribing, ${email}!`);
    this.reset(); // Clear the form
  });
</script>
