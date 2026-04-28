import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const splitFullName = (name: string) => {
  const [firstName = "", ...lastNameParts] = name.trim().split(/\s+/);

  return {
    firstName,
    lastName: lastNameParts.join(" ") || "Not provided",
  };
};

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;600;700&display=swap');

	  .discount-root {
	    width: max-content;
	    max-width: 100%;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    font-family: 'DM Sans', sans-serif;
	    position: relative;
	    isolation: isolate;
	    overflow: visible;
	  }

	  .stationery-bg {
	    position: absolute;
	    width: min(500px, 115vw);
	    height: min(500px, 115vw);
    left: calc(100% - 237px);
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
  }

  .stationery-bg img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

	  .eclipse-bg {
	    position: absolute;
	    width: min(520px, 120vw);
	    height: min(520px, 120vw);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
  }

  .eclipse-bg img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

	  .eclipse-fallback {
	    position: absolute;
	    width: min(520px, 120vw);
	    height: min(520px, 120vw);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -2;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(210,220,130,0.35) 0%, rgba(210,220,130,0.08) 65%, transparent 100%);
  }

	  .card {
	    position: relative;
	    z-index: 1;
	    background: #ffffff;
	    border-radius: 24px;
	    padding: 0 36px 40px;
	    width: 100%;
		    max-width: 420px;
		    min-width: min(420px, calc(100vw - 48px));
		    box-shadow: 0 8px 40px rgba(0,0,0,0.07);
		  }

	  @media (max-width: 639px) {
	    .stationery-bg {
	      width: min(360px, 90vw);
	      height: min(360px, 90vw);
	      left: calc(100% - 48px);
	    }

	    .card {
	      border-radius: 18px;
	      padding: 0 22px 30px;
	      width: calc(100vw - 40px);
	      min-width: 0;
	      max-width: 350px;
	    }

	    .header-badge {
	      padding: 12px 18px;
	      border-radius: 0 0 16px 16px;
	    }

	    .header-badge h1 {
	      font-size: 15px;
	    }

	    .subtitle {
	      font-size: 11px;
	      margin-bottom: 22px;
	    }

	    .subtitle strong {
	      font-size: 11px;
	    }

	    .form-input,
	    .form-textarea {
	      font-size: 13px;
	      padding: 14px 16px;
	    }
	  }

  .card-header {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .header-badge {
    background: #DADD39;
    border-radius: 0 0 20px 20px;
    padding: 14px 28px;
    text-align: center;
    max-width: 90%;
  }

  .header-badge h1 {
    font-family: 'DM Sans', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #2c2c00;
    line-height: 1.3;
  }

  .subtitle {
    text-align: center;
    font-family: 'DM Mono', monospace;
    font-size: 13px;
    font-weight: 400;
    color: #8a8a72;
    line-height: 1.6;
    margin-bottom: 28px;
  }

  .subtitle strong {
    font-weight: 600;
    color: #4a4a30;
    display: block;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-size: 12.5px;
    font-family: 'DM Mono', monospace;
  }

  .form-group {
    margin-bottom: 14px;
  }

  .form-input,
  .form-textarea {
    width: 100%;
    background: #ddddd0;
    border: none;
    border-radius: 14px;
    padding: 16px 20px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: #3a3a28;
    outline: none;
    transition: background 0.2s, box-shadow 0.2s;
    resize: none;
  }

  .form-input::placeholder,
  .form-textarea::placeholder {
    color: #8a8a72;
  }

  .form-input:focus,
  .form-textarea:focus {
    background: #d0d0c0;
    box-shadow: 0 0 0 2px rgba(200, 214, 39, 0.5);
  }

  .form-textarea {
    min-height: 90px;
  }

  .btn-submit {
    display: block;
    margin: 28px auto 0;
  }
`;

export default function DiscountForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const { firstName, lastName } = splitFullName(form.name);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });

      if (response.ok) {
        setSuccess("Thank you! Your message has been received.");
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        const result = await response.json();
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{styles}</style>

      <div className="discount-root">
        {/* Eclipse background image — add your src here */}
        <div className="eclipse-bg">
          <img src="/landing-page/Ellipse 1.png" alt="Eclipse Image" />
        </div>

        <div className="stationery-bg">
          <img
            src="/landing-page/natural-material-stationery-assortment 1.png"
            alt="Stationary Image"
          />
        </div>

        {/* Fallback soft glow */}
        <div className="eclipse-fallback" />

        {/* Card */}
        <form className="card" onSubmit={handleSubmit}>
          {/* Header Badge */}
          <div className="card-header">
            <div className="header-badge">
              <h1>Enter Your Details Below To</h1>
            </div>
          </div>

          {/* Subtitle */}
          <p className="subtitle">
            Fill out this brief form to get your
            <strong>Discount Reserved</strong>
          </p>

          {/* Name */}
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={form.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          {/* Phone */}
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Enter Phone number"
              value={form.phone}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          {/* Message */}
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              required
              className="form-textarea"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="btn-slide-bg btn-submit flex h-10 items-center justify-center rounded-[8px] border border-[#DADD39] bg-[#DADD39] px-3 text-xs font-medium text-black transition-all duration-300 hover:border-black sm:h-11 sm:px-4 sm:text-sm lg:h-[45px] lg:min-w-[182px] lg:px-6 lg:text-[15px]"
          >
            <span className="slide-bg"></span>
            <span className="relative z-10 whitespace-nowrap font-normal tracking-[0.08em]">
              {loading ? "Sending..." : "Let’s Get Started"}
            </span>
          </button>
          {success && (
            <div className="mt-4 text-center text-sm text-green-600">
              {success}
            </div>
          )}
          {error && (
            <div className="mt-4 text-center text-sm text-red-600">
              {error}
            </div>
          )}
        </form>
      </div>
    </>
  );
}
