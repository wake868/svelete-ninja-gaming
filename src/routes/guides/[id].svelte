<script context="module">
  export async function load({ fetch, params }) {
    const id = params.id;
    const res = await fetch(`/guides/${id}.json`);
    const { guide } = await res.json();

    if (res.ok) {
      return {
        props: {
          guide
        }
      };
    }

    return {
      status: 301,
      // error: new Error("Could not fetch the guide")
      redirect: "/guides"
    };
  }
</script>

<script>
  export let guide;
</script>

<div class="mt-5 border-2 border-dotted p-5">
  <h2 class="text-4xl mb-5">{guide.title}</h2>
  <p>{guide.body}</p>

  <div class="flex justify-center mt-5">
    <svg
      class="w-6 h-6 text-purple-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
      />
    </svg>
    <a class="underline" href="/guides">BACK</a>
  </div>
</div>
