<script context="module">
  export function load({ error }) {
    return {
      props: { message: error.message }
    };
  }
</script>

<script>
  export let message;
</script>

<div class="text-center mt-5">
  <h1>Oops...Something went wrong!</h1>
  <p>{message}</p>
  <div class="flex justify-center mt-5 items-center">
    <svg
      class="w-6 h-6 ml-3 text-purple-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
    <a class="text-2xl underline" href="/">HOME</a>
  </div>
</div>
