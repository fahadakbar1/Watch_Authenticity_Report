import { useForm } from "react-hook-form";
import { useState } from "react";
import backgroundImage from "../../assets/background.png";
import logo from "../../assets/logo.png";
import QRcode from "../../assets/QRcode.png";
import "./index.scss";

function Form2({ onSubmit }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({
    defaultValues: {
      weightMeasurement: "",
      TimeMeasurement: "",
      logoPhotos: "",
      wordingsPhotos: "",
      feContent: "",
      auContent: "",
      niContent: "",
      crContent: "",
    },
  });

  const [mainImagePreview, setMainImagePreview] = useState("");
  const [logoPhotosPreview, setLogoPhotosPreview] = useState("");
  const [wordingsPhotosPreview, setWordingsPhotosPreview] = useState("");

  const handleImageChange = (e: any, setPreview: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div
      className="custom-container"
      style={{ backgroundImage: `url(${backgroundImage})`, padding: "80px" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ fontSize: "35px", margin: 0, color: "#ca9e67" }}>
          Watch Authenticity Verification Report
        </h1>
        <img src={logo} alt="Logo" />
      </div>

      <hr
        style={{
          backgroundColor: "#ca9e67",
          height: "1px",
          border: "none",
          marginTop: "40px",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "20% 80%",
          marginTop: "50px",
          alignItems: "center",
        }}
      >
        <img src={QRcode} alt="QRCode" />
        <form action="">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "40% 60%",
            }}
          >
            <div>
              <div style={{ textAlign: "center" }}>
                {mainImagePreview && (
                  <img
                    src={mainImagePreview}
                    alt="Head Shot Preview"
                    style={{ width: "300px", height: "300px" }}
                  />
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  handleImageChange(e, setMainImagePreview);
                }}
              />
            </div>
            <div>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p>Brand</p>
                    </td>
                    <td>
                      <p>BELL & ROSS</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Series</p>
                    </td>
                    <td>
                      <p>INSTRUMENTS</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Reference Number</p>
                    </td>
                    <td>
                      <p>BR S WHITE CERAMIC</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Watch Status</p>
                    </td>
                    <td>
                      <p>New</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Movement Type</p>
                    </td>
                    <td>
                      <p>-N/A</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Function</p>
                    </td>
                    <td>
                      <p>-N/A</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Diameter</p>
                    </td>
                    <td>
                      <p>39mm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Water Resistance (Meter)</p>
                    </td>
                    <td>
                      <p>50m</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Case Material</p>
                    </td>
                    <td>
                      <p>Ceramics</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Bracelet Strap Material</p>
                    </td>
                    <td>
                      <p>Rubber</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Case Back Type</p>
                    </td>
                    <td>
                      <p>Closed Case Back</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Mirror Material</p>
                    </td>
                    <td>
                      <p>Sapphire Crystal</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Year of Manufacture</p>
                    </td>
                    <td>
                      <p>2023</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </form>
      </div>

      <hr
        style={{
          backgroundColor: "#ca9e67",
          height: "1px",
          border: "none",
          margin: "40px 0",
        }}
      />

      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          onSubmit({ form1Data: data });
        })}
      >
        <div style={{ display: "flex" }}>
          <div style={{ textAlign: "center" }}>
            <label
              htmlFor="weightMeasurement"
              style={{ fontSize: "20px", color: "#ca9e67", fontWeight: "500" }}
            >
              Weight Measurement (g)
            </label>
            <input
              {...register("weightMeasurement", { required: true })}
              style={{ marginTop: "20px" }}
            />
            {errors.weightMeasurement && (
              <p className="error">Weight Measurement is required.</p>
            )}
          </div>
          <div style={{ textAlign: "center" }}>
            <label
              htmlFor="TimeMeasurement"
              style={{ fontSize: "20px", color: "#ca9e67", fontWeight: "500" }}
            >
              Time Measurement
            </label>
            <input {...register("TimeMeasurement", { required: true })} />
            <p>within range COSC Range</p>
            {errors.TimeMeasurement && (
              <p className="error">Time Measurement is required.</p>
            )}
          </div>
          <div style={{ textAlign: "center" }}>
            <label
              style={{ fontSize: "20px", color: "#ca9e67", fontWeight: "500" }}
            >
              WatchCase Metal Analysis
            </label>
            <table style={{ borderCollapse: "collapse", marginTop: "20px" }}>
              <tbody>
                <tr style={{ border: "1px solid #ca9e67" }}>
                  <td
                    style={{ border: "1px solid #ca9e67", padding: "5px 10px" }}
                  >
                    <div style={{ display: "flex" }}>
                      <span
                        style={{
                          color: "#ca9e67",
                          fontSize: "18px",
                          fontWeight: "400",
                        }}
                      >
                        Fe:{" "}
                      </span>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        {...register("feContent", {
                          required: true,
                          min: 0,
                          max: 100,
                        })}
                        style={{ marginTop: "20px" }}
                      />{" "}
                      <span
                        style={{
                          color: "#ca9e67",
                          fontSize: "18px",
                          fontWeight: "400",
                        }}
                      >
                        Content%
                      </span>
                    </div>
                    {errors.feContent && (
                      <p className="error">Please Add Fe%</p>
                    )}
                  </td>
                  <td
                    style={{ border: "1px solid #ca9e67", padding: "5px 10px" }}
                  >
                    <div style={{ display: "flex" }}>
                      <span
                        style={{
                          color: "#ca9e67",
                          fontSize: "18px",
                          fontWeight: "400",
                        }}
                      >
                        Au:{" "}
                      </span>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        {...register("auContent", {
                          required: true,
                          min: 0,
                          max: 100,
                        })}
                      />{" "}
                      <span
                        style={{
                          color: "#ca9e67",
                          fontSize: "18px",
                          fontWeight: "400",
                        }}
                      >
                        Content%
                      </span>
                    </div>
                    {errors.auContent && (
                      <p className="error">Please Add Au%</p>
                    )}
                  </td>
                </tr>
                <tr style={{ border: "1px solid #ca9e67" }}>
                  <td
                    style={{ border: "1px solid #ca9e67", padding: "5px 10px" }}
                  >
                    <div style={{ display: "flex" }}>
                      <span
                        style={{
                          color: "#ca9e67",
                          fontSize: "18px",
                          fontWeight: "400",
                        }}
                      >
                        Ni:
                      </span>{" "}
                      <input
                        type="number"
                        min="0"
                        max="100"
                        {...register("niContent", {
                          required: true,
                          min: 0,
                          max: 100,
                        })}
                      />{" "}
                      <span
                        style={{
                          color: "#ca9e67",
                          fontSize: "18px",
                          fontWeight: "400",
                        }}
                      >
                        Content%
                      </span>
                    </div>
                    {errors.niContent && (
                      <p className="error">Please Add Ni%</p>
                    )}
                  </td>
                  <td
                    style={{ border: "1px solid #ca9e67", padding: "5px 10px" }}
                  >
                    <div style={{ display: "flex" }}>
                      <span
                        style={{
                          color: "#ca9e67",
                          fontSize: "18px",
                          fontWeight: "400",
                        }}
                      >
                        Cr:
                      </span>{" "}
                      <input
                        type="number"
                        min="0"
                        max="100"
                        {...register("crContent", {
                          required: true,
                          min: 0,
                          max: 100,
                        })}
                      />{" "}
                      <span
                        style={{
                          color: "#ca9e67",
                          fontSize: "18px",
                          fontWeight: "400",
                        }}
                      >
                        Content%
                      </span>
                    </div>
                    {errors.crContent && (
                      <p className="error">Please Add Cr%</p>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <hr
          style={{
            backgroundColor: "#ca9e67",
            height: "1px",
            border: "none",
            margin: "40px 0",
          }}
        />

        <h1
          style={{
            fontSize: "20px",
            color: "#ca9e67",
            fontWeight: "500",
            marginBottom: "20px",
          }}
        >
          Flaws Detection
        </h1>

        <label htmlFor="logoPhotos">Logo Photo(s)</label>
        <input
          type="file"
          accept="image/*"
          {...register("logoPhotos", { required: true })}
          onChange={(e) => {
            handleImageChange(e, setLogoPhotosPreview);
            clearErrors("logoPhotos");
          }}
        />
        {logoPhotosPreview && (
          <>
            <div style={{ textAlign: "center" }}>
              <img
                src={logoPhotosPreview}
                alt="Head Shot Preview"
                style={{ width: "300px", height: "300px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p>Cleanliness Grade : AA (Dusty Level)</p>
              <p>Finishing Grade : AA (Polishing Level)</p>
            </div>
          </>
        )}
        {errors.logoPhotos && (
          <p className="error">Head Shot of Watch is required.</p>
        )}

        <label htmlFor="wordingsPhotos">Wordings Photos</label>
        <input
          type="file"
          accept="image/*"
          {...register("wordingsPhotos", { required: true })}
          onChange={(e) => {
            handleImageChange(e, setWordingsPhotosPreview);
            clearErrors("wordingsPhotos");
          }}
        />
        {wordingsPhotosPreview && (
          <>
            <div style={{ textAlign: "center" }}>
              <img
                src={wordingsPhotosPreview}
                alt="Buckle Shot Preview"
                style={{ width: "300px", height: "300px", margin: "auto" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p>Cleanliness Grade : AA (Dusty Level)</p>
              <p>Finishing Grade : AA (Polishing Level)</p>
            </div>
          </>
        )}

        {errors.wordingsPhotos && (
          <p className="error">Wording photos of watch are required.</p>
        )}

        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Form2;
