import React, { useState } from "react";
import UserNavbar from "../../../Components/User/UserNavbar/EmployerNavbar";
import MuncipalityDropDown from "../../../Components/User/Dropdown/MuncipalityDropdown";
import SkillDropdown from "../../../Components/User/Dropdown/SkillDropDown";
import { postAJob } from "../../../Services/User/SkillServices";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface JobPostingForm {
  title: string;
  wage: string;
  startDate: string;
  preferredTime: "day" | "night";
  municipalityId: string;
  skill1: string;
  skill2?: string;
  description: string;
  image?: File;
}

const PostJobForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<JobPostingForm>({
    title: "",
    wage: "",
    startDate: "",
    preferredTime: "day",
    municipalityId: "",
    skill1: "",
    skill2: "",
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

    jobData.append("clientId", crypto.randomUUID());
    jobData.append("title", formData.title);
    jobData.append("wage", formData.wage);
    jobData.append("startDate", formData.startDate);
    jobData.append("muncipalityId", formData.municipalityId);
    jobData.append("skillId1", formData.skill1);
    jobData.append("prefferedTime", formData.preferredTime);

    jobData.append("description", formData.description);
    if (formData.image) {
      jobData.append("image", formData.image);
    }

    if (formData.skill2) {
      jobData.append("skillId2", formData.skill2);
    }

    if (!formData.skill1) {
      toast.error("Select the Skill required");
    }
    if (!formData.municipalityId) {
      toast.error("Select the Muncipality");
    }

    if (formData.skill1 && formData.municipalityId) {
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
  const handleMunicipalityChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      municipalityId: value,
    }));
  };
  const handleSkill1Change = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      skill1: value,
    }));
  };
  const handleSkill2Change = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      skill2: value,
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
              <div>
                <label htmlFor="title" className="block mb-2 font-medium">
                  Title *
                </label>
                <input
                  id="title"
                  name="title"
                  required
                  placeholder="Enter job title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              <div>
                <label htmlFor="wage" className="block mb-2 font-medium">
                  Wage *
                </label>
                <input
                  id="wage"
                  name="wage"
                  required
                  type="number"
                  placeholder="Enter wage"
                  value={formData.wage}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              <div>
                <label htmlFor="startDate" className="block mb-2 font-medium">
                  Start Date *
                </label>
                <input
                  id="startDate"
                  name="startDate"
                  required
                  type="date"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

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
                <label className="block mb-2 font-medium">Muncipality</label>
                <MuncipalityDropDown
                  onSelectMunicipality={handleMunicipalityChange}
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Skill1</label>
                <SkillDropdown
                  required={true}
                  onSelectSkill={handleSkill1Change}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">
                  Skill2(optional)
                </label>
                <SkillDropdown
                  required={true}
                  onSelectSkill={handleSkill2Change}
                />
              </div>
              {/* <div>
                <label htmlFor="skill1" className="block mb-2 font-medium">
                  Skill 1 *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchSkill1}
                    onChange={(e) => setSearchSkill1(e.target.value)}
                    onFocus={() => setShowSkill1Dropdown(true)}
                    placeholder="Search skill"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                  <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  {showSkill1Dropdown && skillResults1 && (
                    <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-48 overflow-y-auto">
                      {skillResults1.map((item, index) => (
                        <div
                          key={index}
                          className="px-3 py-2 cursor-pointer hover:bg-purple-50"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, skill1: item }));
                            setSearchSkill1(item);
                            setShowSkill1Dropdown(false);
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div> */}

              {/* <div>
                <label htmlFor="skill2" className="block mb-2 font-medium">
                  Skill 2 (Optional)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchSkill2}
                    onChange={(e) => setSearchSkill2(e.target.value)}
                    onFocus={() => setShowSkill2Dropdown(true)}
                    placeholder="Search skill"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                  <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  {showSkill2Dropdown && skillResults2 && (
                    <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-48 overflow-y-auto">
                      {skillResults2.map((item, index) => (
                        <div
                          key={index}
                          className="px-3 py-2 cursor-pointer hover:bg-purple-50"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, skill2: item }));
                            setSearchSkill2(item);
                            setShowSkill2Dropdown(false);
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div> */}

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
