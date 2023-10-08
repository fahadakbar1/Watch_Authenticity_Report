import { ReactSearchAutocomplete } from "react-search-autocomplete";
import coverImage from "../../assets/cover_image.png";
import backgroundImage from "../../assets/background.png";
import "./index.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Form1 = ({ onSubmit }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm({
    defaultValues: {
      watchModal: "",
      watchBrand: "",
      clientName: "",
      watchSerialNo: "",
      checkBoxes: ["Warranty Card"],
    },
  });

  const watchBrands = [
    {
      id: 0,
      title: "Casio",
    },
    {
      id: 1,
      title: "Rolex",
    },
    {
      id: 2,
      title: "Patek Phillip",
    },
    {
      id: 3,
      title: "Omega",
    },
    {
      id: 4,
      title: "Tag Heuer",
    },
    {
      id: 5,
      title: "Citizen",
    },
  ];

  type WatchModels = {
    [brand: string]: string[];
  };

  const watchModels: WatchModels = {
    Casio: ["Model 1", "Model 2"],
    Rolex: ["Model 3", "Model 4"],
  };

  const [selectedBrand, setSelectedBrand] = useState("");

  const handleBrandSelect = (item: any) => {
    setValue("watchBrand", item.title);
    setSelectedBrand(item.title);
    clearErrors("watchBrand");
  };

  const handleModelSelect = (item: any) => {
    setValue("watchModal", item.title);
    clearErrors("watchModal");
  };

  const filteredModels = watchModels[selectedBrand] || [];

  return (
    <div className="custom-container">
      <div style={{ textAlign: "center" }}>
        <img src={coverImage} alt="cover" className="cover-image" />
      </div>
      <div
        style={{
          width: "80%",
          margin: "auto",
          border: "1px solid #0e2050",
          padding: "100px",
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <p style={{ marginBottom: "20px" }}>Basic Information</p>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            onSubmit({ form1Data: data });
          })}
        >
          <table>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="clientName">Client Name</label>
                </th>
                <td>
                  <input {...register("clientName", { required: true })} />
                </td>
              </tr>
              {errors.clientName && (
                <tr>
                  <td colSpan={2}>
                    <p className="error">Client name is required.</p>
                  </td>
                </tr>
              )}
              <tr>
                <th>
                  <label htmlFor="watchBrand">Watch Brand</label>
                </th>
                <td>
                  <ReactSearchAutocomplete
                    items={watchBrands}
                    fuseOptions={{ keys: ["title", "description"] }}
                    resultStringKeyName="title"
                    showIcon={false}
                    styling={{
                      height: "20px",
                      border: "none",
                      boxShadow: "none",
                      hoverBackgroundColor: "lightgrey",
                      fontSize: "12px",
                      zIndex:1
                    }}
                    onClear={() => {
                      setValue("watchBrand", "");
                    }}
                    onSelect={handleBrandSelect}
                    {...register("watchBrand", { required: true })}
                  />
                </td>
              </tr>
              {errors.watchBrand && (
                <tr>
                  <td colSpan={2}>
                    <p className="error">Watch brand is required.</p>
                  </td>
                </tr>
              )}
              <tr>
                <th>
                  <label htmlFor="watchModal">Watch Modal</label>
                </th>
                <td>
                  <ReactSearchAutocomplete
                    items={filteredModels.map((model) => ({
                      id: model,
                      title: model,
                    }))}
                    fuseOptions={{ keys: ["title"] }}
                    resultStringKeyName="title"
                    showIcon={false}
                    styling={{
                      height: "20px",
                      border: "none",
                      boxShadow: "none",
                      hoverBackgroundColor: "lightgrey",
                      fontSize: "12px",
                    }}
                    onSelect={handleModelSelect}
                    {...register("watchModal", { required: true })}
                  />
                </td>
              </tr>
              {errors.watchModal && (
                <tr>
                  <td colSpan={2}>
                    <p className="error">Watch modal is required.</p>
                  </td>
                </tr>
              )}
              <tr>
                <th>
                  <label htmlFor="watchSerialNo">Watch Serial Number</label>
                </th>
                <td>
                  <input
                    {...register("watchSerialNo", {
                      required: true,
                    })}
                  />
                </td>
              </tr>
              {errors.watchSerialNo &&
                errors.watchSerialNo.type === "required" && (
                  <tr>
                    <td colSpan={2}>
                      <p className="error">Watch Serial Number is required.</p>
                    </td>
                  </tr>
                )}
              <tr>
                <th>
                  <label htmlFor="checkBoxes">Check Boxes</label>
                </th>
                <td>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "0 30px",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="WarrantyCard"
                      value="Warranty Card"
                      {...register("checkBoxes")}
                    />
                    <label htmlFor="WarrantyCard">Warranty Card</label>
                    <input
                      type="checkbox"
                      id="Box"
                      value="Box"
                      {...register("checkBoxes")}
                    />
                    <label htmlFor="Box">Box</label>
                    <input
                      type="checkbox"
                      id="Tags"
                      value="Tags"
                      {...register("checkBoxes")}
                    />
                    <label htmlFor="Tags">Tags</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <input type="submit" value="Next" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default Form1;
