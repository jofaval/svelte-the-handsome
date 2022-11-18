<script>
  let count = 0;
  const setCount = () => count++;
</script>

<button on:click={setCount}>
  {count}
</button>
