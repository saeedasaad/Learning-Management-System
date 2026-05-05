import React from "react";
import Button from "../common/Button";

const ProfileForm = ({
  formData,
  handleChange,
  handleAvatarChange,
  onSubmit,
  setFormData,
}) => {
  return (
    <form onSubmit={onSubmit} className="md:w-[690px]">
      <div className="md:col-span-2 bg-white border md:p-6 p-3">
        {/* Personal Information */}
        <h3 className="md:text-xl text-lg font-semibold mb-4">
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input  type="text"  name="name"  value={formData.name || ""}  onChange={handleChange}  className="w-full border px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" name="email" value={formData.email || ""} onChange={handleChange} className="w-full border px-3 py-2"/>

          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Gender</label>
            <select name="gender" value={formData.gender || ""} onChange={handleChange} className="w-full border px-3 py-2">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Date of Birth
            </label>
            <input type="date" name="dob" value={formData.dob || ""} onChange={handleChange} className="w-full border px-3 py-2" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">Address</label>
            <input type="text" name="address" value={formData.address || ""} onChange={handleChange} className="w-full border px-3 py-2"  />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">City</label>
            <input type="text" name="city" value={formData.city || ""} onChange={handleChange} className="w-full border px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Country</label>
            <input type="text" name="country" value={formData.country || ""} onChange={handleChange} className="w-full border px-3 py-2" />
          </div>
        </div>

        {/* Qualification Section */}
        <h3 className="md:text-xl text-lg font-semibold mt-6 mb-4">
          Qualification / Experience
        </h3>
        <label className="block text-sm font-medium mb-2">
          Highest Qualification
        </label>
        <select name="qualification" value={formData.qualification || ""} onChange={handleChange} className="w-full border px-3 py-2 mb-2" >
          <option value="">Select Qualification</option>
          <option value="Matric">Matric</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Bachelor">Bachelor</option>
          <option value="Master">Master</option>
          <option value="PhD">PhD</option>
        </select>

        <label className="block text-sm font-medium mb-2">Specialization</label>
        <select name="specialization" value={formData.specialization || ""} onChange={handleChange} className="w-full border px-3 py-2">
          <option value="">Select Specialization</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Web Development">Web Development</option>
          <option value="AI / Machine Learning">AI / Machine Learning</option>
          <option value="Networking">Networking</option>
          <option value="Business Administration">
            Business Administration
          </option>
        </select>

        {/* Preferences Section */}
        <h3 className="md:text-xl text-lg font-semibold mt-6 mb-4">
          Preferences / Interests
        </h3>
        <label className="block text-sm font-medium mb-2">
          Familiar with freelancing
        </label>
        <select name="freelancing"
          value={formData.freelancing ? "Yes" : "No"}
          onChange={(e) =>
            setFormData({
              ...formData,
              freelancing: e.target.value === "Yes",
            })
          }
          className="w-full border px-3 py-2"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {/* Avatar Upload */}
        <label className="block text-sm font-medium mt-5 mb-2">
          Upload Avatar
        </label>
        <input type="file" accept="image/*" onChange={handleAvatarChange} className="w-full border px-3 py-2" />

        {/* Submit Button */}
        <Button type="submit" variant="formFull" className="mt-6">
          Save
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
