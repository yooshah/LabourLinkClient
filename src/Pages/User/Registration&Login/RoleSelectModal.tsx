interface ChildProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const RoleSelectModal: React.FC<ChildProps> = ({ setShowModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full border border-gray-300 text-center">
        <h2 className="text-2xl font-bold text-[#3D52A0] mb-4">Who Are You?</h2>
        <p className="text-[#8697C4] mb-6">Choose your role to get started</p>
        <div className="space-y-4">
          <button
            onClick={() => setShowModal(false)}
            className="w-full bg-purple-600 text-white py-2.5 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            I’m an Employer
          </button>
          <p className="text-[#3D52A0] text-sm">You can find Labours</p>
          <button
            onClick={() => setShowModal(false)}
            className="w-full bg-purple-600 text-white py-2.5 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            I’m a Worker
          </button>
          <p className="text-[#3D52A0] text-sm">You can find jobs</p>
        </div>
        <button
          onClick={() => setShowModal(false)}
          className="mt-4 w-full text-gray-600 py-2.5 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default RoleSelectModal;
