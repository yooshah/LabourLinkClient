import React, { useState } from "react";
import UserNavbar from "../../../Components/User/UserNavbar/EmployerNavbar";
import MuncipalityDropDown from "../../../Components/User/Dropdown/MuncipalityDropdown";
import SkillDropdown from "../../../Components/User/Dropdown/SkillDropDown";
import { postAJob } from "../../../Services/User/SkillServices";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import JobPostInput from "../../../Components/User/UserInputs/JobPostInput";

interface JobPostingForm {
  title: string;
  wage: string;
  startDate: string;
  preferredTime: "day" | "night";
  municipalityId: string;
  municipalityName: string;
  skill1Id: string;
  skill1Name: string;
  skill2Id?: string;
  skill2Name?: string;
  description: string;
  image?: File;
}

const PostJobForm = () => {
  const navigate = useNavigate();

  const [showSkill2, setShowSkill2] = useState(false);
  const [formData, setFormData] = useState<JobPostingForm>({
    title: "",
    wage: "",
    startDate: "",
    preferredTime: "day",
    municipalityId: "",
    municipalityName: "",
    skill1Id: "",
    skill1Name: "",
    skill2Id: "",
    skill2Name: "",
    description: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        image: e.target.files![0],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // formData.municipality=
    console.log("Form submitted:", formData);
    const jobData = new FormData();

    // jobData.append("clientId", crypto.randomUUID());
    jobData.append("clientId", "286195A2-52AE-4584-A39F-948CB2567242");
    jobData.append("title", formData.title);
    jobData.append("wage", formData.wage);
    jobData.append("startDate", formData.startDate);
    jobData.append("muncipalityId", formData.municipalityId);
    jobData.append("muncipalityName", formData.municipalityName);
    jobData.append("skillId1", formData.skill1Id);
    jobData.append("skill1Name", formData.skill1Name);
    jobData.append("prefferedTime", formData.preferredTime);

    jobData.append("description", formData.description);
    if (formData.image) {
      jobData.append("image", formData.image);
    }

    if (showSkill2 && formData.skill2Id && formData.skill2Name) {
      jobData.append("skillId2", formData.skill2Id);
      jobData.append("skill2Name", formData.skill2Name);
    }

    if (!formData.skill1Id) {
      toast.error("Select the Skill required");
    }
    if (!formData.municipalityId) {
      toast.error("Select the Muncipality");
    }

    if (formData.skill1Id && formData.municipalityId) {
      console.log("ghjk");

      const result = await postAJob(jobData);
      console.log(result.statusCode);
      if (result.statusCode == 200) {
        navigate("/employer/homepage");
        toast.success("Successfully created Job Post");
        // setTimeout(() => {
        //   navigate("/employer/homepage");
        // }, 3000);
      }
    }
  };
  const handleMunicipalityChange = (municipality: {
    municipalityId: string;
    name: string;
  }) => {
    setFormData((prev) => ({
      ...prev,
      municipalityId: municipality.municipalityId,
      municipalityName: municipality.name,
    }));
  };
  const handleSkill1Change = (value: {
    skillId: string;
    skillName: string;
  }) => {
    setFormData((prev) => ({
      ...prev,
      skill1Id: value.skillId,
      skill1Name: value.skillName,
    }));
  };
  const handleSkill2Change = (value: {
    skillId: string;
    skillName: string;
  }) => {
    setFormData((prev) => ({
      ...prev,
      skill2Id: value.skillId,
      skill2Name: value.skillName,
    }));
  };

  const handleRemoveSkillButton = () => {
    setShowSkill2(false);
    setFormData((prev) => ({
      ...prev,
      skill2Id: "",
      skill2Name: "",
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <UserNavbar />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Post a Job</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <JobPostInput
                inputfieldName="title"
                value={formData.title}
                placeHolder={"Enter job title"}
                handleInputChange={handleInputChange}
                type="text"
                required={true}
              />
              <JobPostInput
                inputfieldName="wage"
                value={formData.wage}
                placeHolder={"Enter wage"}
                handleInputChange={handleInputChange}
                type="number"
                required={true}
              />
              <JobPostInput
                inputfieldName="startDate"
                value={formData.startDate}
                placeHolder={""}
                handleInputChange={handleInputChange}
                type="date"
                required={true}
              />

              <div>
                <label className="block mb-2 font-medium">
                  Preferred Time *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredTime"
                      value="day"
                      checked={formData.preferredTime === "day"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Day
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredTime"
                      value="night"
                      checked={formData.preferredTime === "night"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Night
                  </label>
                </div>
              </div>
            </div>
            {/* <MuncipalityDropDown /> */}

            {/* Right Column */}

            <div className="space-y-4">
              <div>
                <label className="block mb-2 font-medium">Muncipality *</label>
                <MuncipalityDropDown
                  onSelectMunicipality={handleMunicipalityChange}
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Skill1 *</label>
                <SkillDropdown
                  required={true}
                  onSelectSkill={handleSkill1Change}
                />
              </div>

              {!showSkill2 && (
                <div className="block mb-2 font-medium">
                  <span
                    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 cursor-pointer"
                    onClick={() => setShowSkill2(true)}
                  >
                    Add Skill
                  </span>
                </div>
              )}

              {showSkill2 && (
                <div>
                  <label className="block mb-2 font-medium">
                    Skill2(optional)
                  </label>
                  <SkillDropdown
                    required={false}
                    onSelectSkill={handleSkill2Change}
                  />
                </div>
              )}

              {showSkill2 && (
                <div className="block mb-2 font-medium">
                  <span
                    className="px-4 py-2  bg-red-700 text-white rounded-md hover:bg-red-800 cursor-pointer"
                    onClick={handleRemoveSkillButton}
                  >
                    Remove Skill
                  </span>
                </div>
              )}

              <div>
                <label className="block mb-2 font-medium">Upload Image *</label>
                <div className="border-2 border-dashed rounded-lg p-4 text-center">
                  <input
                    type="file"
                    required
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full"
                    id="image-upload"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block mb-2 font-medium">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              required
              placeholder="Enter job description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md h-32"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJobForm;
