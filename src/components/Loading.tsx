type PropTypes = {
  isLoading: boolean;
};

function Loading({ isLoading = false }: PropTypes) {
  return (
    isLoading && (
      <div className="flex items-center justify-center w-full p-20 ">
        <div className="rounded-md mt-10 mb-10 mx-auto h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute" />
      </div>
    )
  );
}

export default Loading;
