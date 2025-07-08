"use client";

import type React from "react";

import { useState, type CSSProperties } from "react";

interface InputFieldProps {
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
  icon: string;
}

interface StylesType {
  [key: string]: CSSProperties;
}

const AuthForm: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  const toggleForm = (showSignUp: boolean): void => {
    setIsSignUp(showSignUp);
  };

  const styles: StylesType = {
    body: {
      backgroundColor: "#c9d6ff",
      background: "linear-gradient(to right, #e2e2e2, #c9d6ff)",
      minHeight: "100vh",
      padding: "2rem 1rem",
      margin: 0,
      fontFamily: "sans-serif",
    },
    mainContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "3rem",
      maxWidth: "1200px",
      margin: "0 auto",
      minHeight: "80vh",
    },
    leftSection: {
      flex: "1",
      maxWidth: "450px",
    },
    rightSection: {
      flex: "1",
      maxWidth: "400px",
      padding: "2rem",
    },
    container: {
      backgroundColor: "#fff",
      width: "100%",
      padding: "1.5rem",
      borderRadius: "10px",
      boxShadow: "0 20px 35px rgba(0, 0, 1, 0.9)",
    },
    form: {
      margin: "0 2rem",
    },
    formTitle: {
      fontSize: "1.5rem",
      textAlign: "center",
      fontWeight: "bold",
      padding: "1.3rem",
      marginBottom: "0.4rem",
    },
    inputGroup: {
      padding: "1% 0",
      position: "relative",
    },
    icon: {
      position: "absolute",
      color: "black",
      left: "0",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
    },
    input: {
      color: "inherit",
      width: "100%",
      backgroundColor: "transparent",
      border: "none",
      borderBottom: "1px solid #757575",
      paddingLeft: "1.5rem",
      fontSize: "15px",
      outline: "none",
      padding: "10px 0 10px 1.5rem",
    },
    inputFocus: {
      borderBottom: "2px solid hsl(327, 90%, 28%)",
    },
    label: {
      color: "#757575",
      position: "absolute",
      left: "1.2em",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "text",
      transition: "0.3s ease all",
      pointerEvents: "none",
    },
    labelActive: {
      top: "10%",
      color: "hsl(327, 90%, 28%)",
      fontSize: "15px",
    },
    recover: {
      textAlign: "right",
      fontSize: "1rem",
      marginBottom: "1rem",
    },
    recoverLink: {
      textDecoration: "none",
      color: "rgb(125, 125, 235)",
    },
    btn: {
      fontSize: "1.1rem",
      padding: "8px 0",
      borderRadius: "5px",
      outline: "none",
      border: "none",
      width: "100%",
      background: "rgb(125, 125, 235)",
      color: "white",
      cursor: "pointer",
      transition: "0.9s",
      marginTop: "1rem",
    },
    or: {
      fontSize: "1.1rem",
      marginTop: "0.5rem",
      textAlign: "center",
    },
    icons: {
      textAlign: "center",
      marginTop: "1rem",
    },
    socialIcon: {
      color: "rgb(125, 125, 235)",
      padding: "0.8rem 1.5rem",
      borderRadius: "10px",
      fontSize: "1.5rem",
      cursor: "pointer",
      border: "2px solid #dfe9f5",
      margin: "0 15px",
      transition: "1s",
      backgroundColor: "transparent",
    },
    links: {
      display: "flex",
      justifyContent: "space-around",
      padding: "0 4rem",
      marginTop: "0.9rem",
      fontWeight: "bold",
    },
    toggleButton: {
      color: "rgb(125, 125, 235)",
      border: "none",
      backgroundColor: "transparent",
      fontSize: "1rem",
      fontWeight: "bold",
      cursor: "pointer",
    },
    branding: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      padding: "3rem 2rem",
      borderRadius: "15px",
      textAlign: "left",
      boxShadow: "0 15px 35px rgba(0, 0, 1, 0.1)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },
    companyName: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: "#2c3e50",
      marginBottom: "1.5rem",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      lineHeight: "1.2",
    },
    companyDescription: {
      fontSize: "1.2rem",
      color: "#5a6c7d",
      lineHeight: "1.8",
      fontWeight: "400",
      marginBottom: "2rem",
    },
    featureList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    featureItem: {
      display: "flex",
      alignItems: "center",
      marginBottom: "1rem",
      fontSize: "1rem",
      color: "#6c757d",
    },
    featureIcon: {
      color: "rgb(125, 125, 235)",
      marginRight: "0.8rem",
      fontSize: "1.2rem",
    },
  };

  const CompanyBranding: React.FC = () => (
    <div style={styles.branding}>
      <h1 style={styles.companyName}>TechFlow Solutions</h1>
      <p style={styles.companyDescription}>
        Empowering businesses with innovative technology solutions. Join
        thousands of companies who trust us to streamline their operations and
        accelerate their digital transformation journey.
      </p>
      <ul style={styles.featureList}>
        <li style={styles.featureItem}>
          <i className="fas fa-check-circle" style={styles.featureIcon}></i>
          Secure & Reliable Platform
        </li>
        <li style={styles.featureItem}>
          <i className="fas fa-check-circle" style={styles.featureIcon}></i>
          24/7 Customer Support
        </li>
        <li style={styles.featureItem}>
          <i className="fas fa-check-circle" style={styles.featureIcon}></i>
          Advanced Analytics Dashboard
        </li>
        <li style={styles.featureItem}>
          <i className="fas fa-check-circle" style={styles.featureIcon}></i>
          Enterprise-Grade Security
        </li>
      </ul>
    </div>
  );

  const InputField: React.FC<InputFieldProps> = ({
    type,
    name,
    placeholder,
    required = false,
    icon,
  }) => {
    const [value, setValue] = useState<string>("");
    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
      <div style={styles.inputGroup}>
        <i className={icon} style={styles.icon}></i>
        <input
          type={type}
          name={name}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          style={{
            ...styles.input,
            ...(isFocused ? styles.inputFocus : {}),
          }}
        />
        <label
          style={{
            ...styles.label,
            ...(isFocused || value ? styles.labelActive : {}),
          }}
        >
          {placeholder}
        </label>
      </div>
    );
  };

  return (
    <div style={styles.body}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
      />

      <div style={styles.mainContainer}>
        {/* Left Section - Authentication Form */}
        <div style={styles.leftSection}>
          {/* Sign Up Form */}
          {isSignUp && (
            <div style={styles.container}>
              <h1 style={styles.formTitle}>Register</h1>
              <form
                style={styles.form}
                onSubmit={(e: React.FormEvent) => e.preventDefault()}
              >
                <InputField
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  required
                  icon="fas fa-user"
                />
                <InputField
                  type="text"
                  name="mname"
                  placeholder="Middle Name"
                  icon="fas fa-user"
                />
                <InputField
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  icon="fas fa-user"
                />
                <InputField
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  icon="fas fa-envelope"
                />
                <InputField
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  icon="fas fa-lock"
                />
                <input
                  type="submit"
                  style={styles.btn}
                  value="Sign-Up"
                  onMouseOver={(e: React.MouseEvent<HTMLInputElement>) => {
                    (e.target as HTMLInputElement).style.background = "#07001f";
                  }}
                  onMouseOut={(e: React.MouseEvent<HTMLInputElement>) => {
                    (e.target as HTMLInputElement).style.background =
                      "rgb(125, 125, 235)";
                  }}
                />
              </form>
              <p style={styles.or}>------------------or-----------------</p>
              <div style={styles.icons}>
                <i
                  className="fab fa-google"
                  style={styles.socialIcon}
                  onMouseOver={(e: React.MouseEvent<HTMLElement>) => {
                    (e.target as HTMLElement).style.background = "#07001f";
                    (e.target as HTMLElement).style.fontSize = "1.6rem";
                    (e.target as HTMLElement).style.border =
                      "2px solid rgb(125, 125, 235)";
                  }}
                  onMouseOut={(e: React.MouseEvent<HTMLElement>) => {
                    (e.target as HTMLElement).style.background = "transparent";
                    (e.target as HTMLElement).style.fontSize = "1.5rem";
                    (e.target as HTMLElement).style.border =
                      "2px solid #dfe9f5";
                  }}
                ></i>
                <i
                  className="fab fa-facebook"
                  style={styles.socialIcon}
                  onMouseOver={(e: React.MouseEvent<HTMLElement>) => {
                    (e.target as HTMLElement).style.background = "#07001f";
                    (e.target as HTMLElement).style.fontSize = "1.6rem";
                    (e.target as HTMLElement).style.border =
                      "2px solid rgb(125, 125, 235)";
                  }}
                  onMouseOut={(e: React.MouseEvent<HTMLElement>) => {
                    (e.target as HTMLElement).style.background = "transparent";
                    (e.target as HTMLElement).style.fontSize = "1.5rem";
                    (e.target as HTMLElement).style.border =
                      "2px solid #dfe9f5";
                  }}
                ></i>
                <i
                  className="fab fa-linkedin"
                  style={styles.socialIcon}
                  onMouseOver={(e: React.MouseEvent<HTMLElement>) => {
                    (e.target as HTMLElement).style.background = "#07001f";
                    (e.target as HTMLElement).style.fontSize = "1.6rem";
                    (e.target as HTMLElement).style.border =
                      "2px solid rgb(125, 125, 235)";
                  }}
                  onMouseOut={(e: React.MouseEvent<HTMLElement>) => {
                    (e.target as HTMLElement).style.background = "transparent";
                    (e.target as HTMLElement).style.fontSize = "1.5rem";
                    (e.target as HTMLElement).style.border =
                      "2px solid #dfe9f5";
                  }}
                ></i>
              </div>
              <div style={styles.links}>
                <p>Already have an Account ?</p>
                <button
                  style={styles.toggleButton}
                  onClick={() => toggleForm(false)}
                  onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
                    (e.target as HTMLButtonElement).style.textDecoration =
                      "underline";
                    (e.target as HTMLButtonElement).style.color = "blue";
                  }}
                  onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
                    (e.target as HTMLButtonElement).style.textDecoration =
                      "none";
                    (e.target as HTMLButtonElement).style.color =
                      "rgb(125, 125, 235)";
                  }}
                >
                  Sign-in
                </button>
              </div>
            </div>
          )}

          {/* Sign In Form */}
          {!isSignUp && (
            <div style={styles.container}>
              <h1 style={styles.formTitle}>Sign In</h1>
              <form
                style={styles.form}
                onSubmit={(e: React.FormEvent) => e.preventDefault()}
              >
                <InputField
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  icon="fas fa-envelope"
                />
                <InputField
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  icon="fas fa-lock"
                />
                <p style={styles.recover}>
                  <a
                    href="#"
                    style={styles.recoverLink}
                    onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      (e.target as HTMLAnchorElement).style.color = "blue";
                      (e.target as HTMLAnchorElement).style.textDecoration =
                        "underline";
                    }}
                    onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      (e.target as HTMLAnchorElement).style.color =
                        "rgb(125, 125, 235)";
                      (e.target as HTMLAnchorElement).style.textDecoration =
                        "none";
                    }}
                  >
                    Recover password
                  </a>
                </p>
                <input
                  type="submit"
                  style={styles.btn}
                  value="Sign-in"
                  onMouseOver={(e: React.MouseEvent<HTMLInputElement>) => {
                    (e.target as HTMLInputElement).style.background = "#07001f";
                  }}
                  onMouseOut={(e: React.MouseEvent<HTMLInputElement>) => {
                    (e.target as HTMLInputElement).style.background =
                      "rgb(125, 125, 235)";
                  }}
                />
              </form>
              <p style={styles.or}>------------------or-----------------</p>
              <div style={styles.icons}>
                <i
                  className="fab fa-google"
                  style={styles.socialIcon}
                  onMouseOver={(e: React.MouseEvent<HTMLElement>) => {
                    (e.target as HTMLElement).style.background = "#07001f";
                    (e.target as HTMLElement).style.fontSize = "1.6rem";
                    (e.target as HTMLElement).style.border =
                      "2px solid rgb(125, 125, 235)";
                  }}
                  onMouseOut={(e: React.MouseEvent<HTMLElement>) => {
                    (e.target as HTMLElement).style.background = "transparent";
                    (e.target as HTMLElement).style.fontSize = "1.5rem";
                    (e.target as HTMLElement).style.border =
                      "2px solid #dfe9f5";
                  }}
                ></i>
                <i
                  className="fab fa-facebook"
                  style={styles.socialIcon}
                  onMouseOver={(e: React.MouseEvent<HTMLElement>) => {
                    (e.target as HTMLElement).style.background = "#07001f";
                    (e.target as HTMLElement).style.fontSize = "1.6rem";
                    (e.target as HTMLElement).style.border =
                      "2px solid rgb(125, 125, 235)";
                  }}
                  onMouseOut={(e: React.MouseEvent<HTMLElement>) => {
                    (e.target as HTMLElement).style.background = "transparent";
                    (e.target as HTMLElement).style.fontSize = "1.5rem";
                    (e.target as HTMLElement).style.border =
                      "2px solid #dfe9f5";
                  }}
                ></i>
                <i
                  className="fab fa-linkedin"
                  style={styles.socialIcon}
                  onMouseOver={(e: React.MouseEvent<HTMLElement>) => {
                    (e.target as HTMLElement).style.background = "#07001f";
                    (e.target as HTMLElement).style.fontSize = "1.6rem";
                    (e.target as HTMLElement).style.border =
                      "2px solid rgb(125, 125, 235)";
                  }}
                  onMouseOut={(e: React.MouseEvent<HTMLElement>) => {
                    (e.target as HTMLElement).style.background = "transparent";
                    (e.target as HTMLElement).style.fontSize = "1.5rem";
                    (e.target as HTMLElement).style.border =
                      "2px solid #dfe9f5";
                  }}
                ></i>
              </div>
              <div style={styles.links}>
                <p>Make a Account ?</p>
                <button
                  style={styles.toggleButton}
                  onClick={() => toggleForm(true)}
                  onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
                    (e.target as HTMLButtonElement).style.textDecoration =
                      "underline";
                    (e.target as HTMLButtonElement).style.color = "blue";
                  }}
                  onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
                    (e.target as HTMLButtonElement).style.textDecoration =
                      "none";
                    (e.target as HTMLButtonElement).style.color =
                      "rgb(125, 125, 235)";
                  }}
                >
                  Sign-up
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Section - Company Branding */}
        <div style={styles.rightSection}>
          <CompanyBranding />
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
