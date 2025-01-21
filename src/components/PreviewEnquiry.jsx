const PreviewEnquiry = ({togglePrevModel}) => {

  return (
    <div className="absolute inset-1 z-30 bg-gray-300 flex justify-center">
      <div className="max-w-full md: mx-2 my-2  flex flex-col bg-white shadow rounded-lg overflow-hidden">
      <div className="p-6 flex justify-between items-center gap-2 rounded-t-md bg-gradient-to-r from-orange-300 to-yellow-300 ">
          <h2 className="text-lg font-semibold text-gray-700 capitalize">
            Student Enquiry Details
          </h2>
          <button
            onClick={togglePrevModel}
            className="h-8 w-8 rounded-full text-white bg-red-500 shadow-md"
          >
            X
          </button>
        </div>
        <div className="px-4 py-4 grid grid-cols-[400px_1fr] md:grid-cols-[repeat(2,400px)] gap-2">
          {/* <div>
            <div className="col-span-3 flex justify-between ">
              <label className=" text-sm font-medium text-gray-700">
                Name
              </label>
              <p className="flex justify-end items-center mx-2 text-md">Shailendra</p>
            </div>
            <div className="mt-4 border-t border-gray-200"></div>
          </div> */}

          <div className="flex justify-between items-center col-span-2 border-b border-gray-200 px-4 py-2 mx-2">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <p className="mt-1 text-base font-medium text-gray-900 flex items-center justify-center">
              Shailendra Singh
            </p>
          </div>

          <div className="flex justify-between items-center border-b border-gray-200 px-4 py-2 mx-2">
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <p className="mt-1 text-base font-medium text-gray-900 flex items-center justify-center">
              xcoder.shailendra@gmail.com
            </p>
          </div>
          <div className="flex justify-between items-center gap-6  border-b border-gray-200 px-4 py-2 mx-2">
            <label className="block text-sm font-medium text-gray-700">
              Contact No.
            </label>
            <p className="mt-1 text-base font-medium text-gray-900 flex items-center justify-center">
              +919755839451
            </p>
          </div>

          <div className="flex justify-between items-center  border-b border-gray-200 px-4 py-2 mx-2">
            <label className="block text-sm font-medium text-gray-700">
              Academic Qualification
            </label>
            <p className="mt-1 text-base font-medium text-gray-900 flex items-center justify-center">
              B.tech
            </p>
          </div>
          <div className="flex justify-between items-center gap-6  border-b border-gray-200 px-4 py-2 mx-2">
            <label className="block text-sm font-medium text-gray-700">
              Year of Passing
            </label>
            <p className="mt-1 text-base font-medium text-gray-900 flex items-center justify-center">
              2024
            </p>
          </div>
          <div className="flex justify-between items-center gap-6  border-b border-gray-200 px-4 py-2 mx-2">
            <label className="block text-sm font-medium text-gray-700">
              Course Name
            </label>
            <p className="mt-1 text-base font-medium text-gray-900 flex items-center justify-center">
              MERN Stack
            </p>
          </div>
          <div className="flex justify-between items-center gap-6  border-b border-gray-200 px-4 py-2 mx-2">
            <label className="block text-sm font-medium text-gray-700">
              Referral By
            </label>
            <p className="mt-1 text-base font-medium text-gray-900 flex items-center justify-center">
              Tiya Rajput
            </p>
          </div>
          <div className="flex justify-between items-center gap-6  border-b border-gray-200 px-4 py-2 mx-2">
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <p className="mt-1 text-base font-medium text-gray-900 flex items-center justify-center">
              Interested
            </p>
          </div>
          <div className="flex justify-between items-center gap-6  border-b border-gray-200 px-4 py-2 mx-2">
            <label className="block text-sm font-medium text-gray-700">
              Demo
            </label>
            <p className="mt-1 text-base font-medium text-gray-900 flex items-center justify-center">
              Yes
            </p>
          </div>
          <div className="flex justify-between items-center gap-6  border-b border-gray-200 px-4 py-2 mx-2">
            <label className="block text-sm font-medium text-gray-700">
              Follow Up Message
            </label>
            <p className="mt-1 text-base font-medium text-gray-900 flex items-center justify-center">
              Good Places
            </p>
          </div>
          
          
          
        </div>
      </div>
    </div>
  );
};

export default PreviewEnquiry;
