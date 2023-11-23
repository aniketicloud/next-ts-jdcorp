export default function SnippetCreate() {
  return (
    <div className="pt-32 absolute inset-0 bg-gradient-to-b from-amber-200">
      <form className="container mx-auto px-12">
        <h3 className="font-bold my-3">Create a Snippet</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label className="w-12" htmlFor="title">
              Title
            </label>
            <input
              className="border rounded p-2 w-full"
              name="title"
              id="title"
            />
          </div>
          <div className="flex gap-4">
            <label className="w-12" htmlFor="code">
              Code
            </label>
            <textarea
              className="border rounded p-2 w-full"
              name="code"
              id="code"
            />
          </div>
          <button type="submit" className="rounded p-2 bg-blue-200">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
