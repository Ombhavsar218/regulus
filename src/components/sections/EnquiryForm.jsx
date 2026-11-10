import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Copy,
  Check,
  RotateCcw,
  Info,
} from 'lucide-react';
import { submitEnquiry } from '../../services/enquiryService';
import { Button } from '../common/Button';

export const INDUSTRY_OPTIONS = [
  'Manufacturing',
  'Retail',
  'Healthcare',
  'Logistics',
  'Distribution',
  'Professional Services',
  'Other',
];

export const SERVICE_OPTIONS = [
  'Customized ERP Development',
  'Custom Software Development',
  'Website Design and Development',
  'Business Process Automation',
  'Digital Business Solutions',
];

const INITIAL_VALUES = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  industry: '',
  service: '',
  description: '',
};

function validateForm(values) {
  const errors = {};

  if (!values.fullName.trim()) {
    errors.fullName = 'Please enter your full name.';
  } else if (values.fullName.trim().length < 2) {
    errors.fullName = 'Full name must be at least 2 characters.';
  }

  if (!values.companyName.trim()) {
    errors.companyName = 'Please enter your company or organization name.';
  } else if (values.companyName.trim().length < 2) {
    errors.companyName = 'Company name must be at least 2 characters.';
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your business email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (values.phone.trim()) {
    const cleaned = values.phone.trim();
    if (!/^[+\d\s()-]{7,20}$/.test(cleaned) || cleaned.replace(/\D/g, '').length < 7) {
      errors.phone = 'Please enter a valid phone number or leave this field blank.';
    }
  }

  if (!values.industry) {
    errors.industry = 'Please select your industry.';
  }

  if (!values.service) {
    errors.service = 'Please select the service you are enquiring about.';
  }

  if (!values.description.trim()) {
    errors.description = 'Please describe your project or operational requirements.';
  } else if (values.description.trim().length < 20) {
    errors.description = 'Please provide at least 20 characters describing your requirement.';
  }

  return errors;
}

export function EnquiryForm() {
  const [searchParams] = useSearchParams();
  const [values, setValues] = useState(INITIAL_VALUES);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [submissionResult, setSubmissionResult] = useState(null);
  const [submitError, setSubmitError] = useState('');
  const [copied, setCopied] = useState(false);

  // Sync prefilled query parameters from CTAs
  useEffect(() => {
    const prefillService = searchParams.get('service');
    const prefillIndustry = searchParams.get('industry');
    setValues((prev) => ({
      ...prev,
      service:
        prefillService && SERVICE_OPTIONS.includes(prefillService)
          ? prefillService
          : prev.service,
      industry:
        prefillIndustry && INDUSTRY_OPTIONS.includes(prefillIndustry)
          ? prefillIndustry
          : prev.industry,
    }));
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextValues = { ...values, [name]: value };
    setValues(nextValues);

    if (touched[name]) {
      const nextErrors = validateForm(nextValues);
      setErrors((prev) => ({ ...prev, [name]: nextErrors[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const nextErrors = validateForm(values);
    setErrors((prev) => ({ ...prev, [name]: nextErrors[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = Object.keys(INITIAL_VALUES).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    );
    setTouched(allTouched);

    const validationErrors = validateForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const firstErrorField = Object.keys(validationErrors)[0];
      const el = document.getElementById(`enquiry-${firstErrorField}`);
      if (el) el.focus();
      return;
    }

    setStatus('submitting');
    setSubmitError('');

    try {
      const result = await submitEnquiry({
        fullName: values.fullName.trim(),
        companyName: values.companyName.trim(),
        email: values.email.trim(),
        phone: values.phone.trim() || 'Not provided',
        industry: values.industry,
        service: values.service,
        description: values.description.trim(),
      });
      setSubmissionResult(result);
      setStatus('success');
    } catch (err) {
      setSubmitError(
        err?.message || 'Unable to process the enquiry right now. Please try again.'
      );
      setStatus('error');
    }
  };

  const handleCopySummary = async () => {
    if (!submissionResult?.payload) return;
    const p = submissionResult.payload;
    const summaryText = [
      'REGULUS Project Enquiry Summary',
      `Full Name: ${p.fullName}`,
      `Company: ${p.companyName}`,
      `Email: ${p.email}`,
      `Phone: ${p.phone}`,
      `Industry: ${p.industry}`,
      `Service Required: ${p.service}`,
      `Project Description:\n${p.description}`,
    ].join('\n');

    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard fallback ignored if blocked
    }
  };

  const handleReset = () => {
    setValues(INITIAL_VALUES);
    setTouched({});
    setErrors({});
    setStatus('idle');
    setSubmissionResult(null);
    setSubmitError('');
  };

  if (status === 'success' && submissionResult) {
    const isPreview = submissionResult.mode === 'preview';
    const p = submissionResult.payload;

    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-regulus-border bg-regulus-elevated p-6 sm:p-8 shadow-card theme-transition"
      >
        <div className="flex items-start gap-3.5">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-regulus-accent-soft text-regulus-accent-text">
            <CheckCircle2 className="h-5 w-5" />
          </span>
          <div>
            <span className="font-mono text-xs font-medium uppercase tracking-wider text-regulus-accent-text">
              {isPreview ? 'Integration-Ready Mode' : 'Enquiry Sent'}
            </span>
            <h3 className="mt-1 text-xl font-semibold text-regulus-text">
              {isPreview
                ? 'Enquiry Validated & Prepared'
                : 'Thank You — Enquiry Received'}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-regulus-muted">
              {submissionResult.message}
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-regulus-border bg-regulus-subtle p-4 text-xs sm:text-sm theme-transition">
          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <dt className="text-xs text-regulus-faint">Full Name</dt>
              <dd className="mt-0.5 font-medium text-regulus-text">{p.fullName}</dd>
            </div>
            <div>
              <dt className="text-xs text-regulus-faint">Company Name</dt>
              <dd className="mt-0.5 font-medium text-regulus-text">{p.companyName}</dd>
            </div>
            <div>
              <dt className="text-xs text-regulus-faint">Email Address</dt>
              <dd className="mt-0.5 font-medium text-regulus-text">{p.email}</dd>
            </div>
            <div>
              <dt className="text-xs text-regulus-faint">Phone Number</dt>
              <dd className="mt-0.5 font-medium text-regulus-text">{p.phone}</dd>
            </div>
            <div>
              <dt className="text-xs text-regulus-faint">Industry</dt>
              <dd className="mt-0.5 font-medium text-regulus-text">{p.industry}</dd>
            </div>
            <div>
              <dt className="text-xs text-regulus-faint">Service Required</dt>
              <dd className="mt-0.5 font-medium text-regulus-text">{p.service}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs text-regulus-faint">Project Description</dt>
              <dd className="mt-1 whitespace-pre-line text-regulus-muted">
                {p.description}
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button type="button" variant="secondary" size="sm" onClick={handleCopySummary}>
            {copied ? (
              <>
                <Check className="h-4 w-4 text-regulus-accent-text" />
                Summary Copied
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy Summary
              </>
            )}
          </Button>
          <Button type="button" variant="ghost" size="sm" onClick={handleReset}>
            <RotateCcw className="h-4 w-4" />
            Prepare Another Enquiry
          </Button>
        </div>
      </div>
    );
  }

  const inputBase =
    'mt-1.5 block w-full rounded-lg border bg-regulus-bg px-3.5 py-2.5 text-sm text-regulus-text placeholder:text-regulus-faint theme-transition focus:outline-none focus:ring-2 focus:ring-regulus-border-strong/30';

  const getBorderClass = (field) =>
    touched[field] && errors[field]
      ? 'border-regulus-text focus:border-regulus-text'
      : 'border-regulus-border-strong/55 focus:border-regulus-border-strong';

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-regulus-border bg-regulus-elevated p-6 sm:p-8 shadow-card theme-transition"
    >
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-regulus-border pb-5">
        <div>
          <h2 className="text-xl font-semibold text-regulus-text">
            Project Enquiry Form
          </h2>
          <p className="mt-1 text-sm text-regulus-muted">
            Share your operational goals and requirements below.
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-regulus-border bg-regulus-card px-3 py-1 text-xs text-regulus-muted">
          <Info className="h-3.5 w-3.5 text-regulus-accent-text" />
          Integration-ready form
        </span>
      </div>

      {status === 'error' && submitError && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-2.5 rounded-xl border border-regulus-accent bg-regulus-card p-3.5 text-sm text-regulus-text"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-regulus-accent-text" />
          <span>{submitError}</span>
        </div>
      )}

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Full Name */}
        <div>
          <label
            htmlFor="enquiry-fullName"
            className="block text-xs font-semibold uppercase tracking-wide text-regulus-text"
          >
            Full Name <span className="text-regulus-accent-text">*</span>
          </label>
          <input
            id="enquiry-fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(touched.fullName && errors.fullName)}
            aria-describedby={errors.fullName ? 'error-fullName' : undefined}
            className={`${inputBase} ${getBorderClass('fullName')}`}
          />
          {touched.fullName && errors.fullName && (
            <p id="error-fullName" className="mt-1.5 flex items-center gap-1 text-xs font-medium text-regulus-accent-text">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label
            htmlFor="enquiry-companyName"
            className="block text-xs font-semibold uppercase tracking-wide text-regulus-text"
          >
            Company Name <span className="text-regulus-accent-text">*</span>
          </label>
          <input
            id="enquiry-companyName"
            name="companyName"
            type="text"
            autoComplete="organization"
            placeholder="Your company or organization"
            value={values.companyName}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(touched.companyName && errors.companyName)}
            aria-describedby={errors.companyName ? 'error-companyName' : undefined}
            className={`${inputBase} ${getBorderClass('companyName')}`}
          />
          {touched.companyName && errors.companyName && (
            <p id="error-companyName" className="mt-1.5 flex items-center gap-1 text-xs font-medium text-regulus-accent-text">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.companyName}</span>
            </p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label
            htmlFor="enquiry-email"
            className="block text-xs font-semibold uppercase tracking-wide text-regulus-text"
          >
            Email Address <span className="text-regulus-accent-text">*</span>
          </label>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@company.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(touched.email && errors.email)}
            aria-describedby={errors.email ? 'error-email' : undefined}
            className={`${inputBase} ${getBorderClass('email')}`}
          />
          {touched.email && errors.email && (
            <p id="error-email" className="mt-1.5 flex items-center gap-1 text-xs font-medium text-regulus-accent-text">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="enquiry-phone"
            className="block text-xs font-semibold uppercase tracking-wide text-regulus-text"
          >
            Phone Number <span className="font-normal text-regulus-faint">(Optional)</span>
          </label>
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 (000) 000-0000"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(touched.phone && errors.phone)}
            aria-describedby={errors.phone ? 'error-phone' : undefined}
            className={`${inputBase} ${getBorderClass('phone')}`}
          />
          {touched.phone && errors.phone && (
            <p id="error-phone" className="mt-1.5 flex items-center gap-1 text-xs font-medium text-regulus-accent-text">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Industry */}
        <div>
          <label
            htmlFor="enquiry-industry"
            className="block text-xs font-semibold uppercase tracking-wide text-regulus-text"
          >
            Industry <span className="text-regulus-accent-text">*</span>
          </label>
          <select
            id="enquiry-industry"
            name="industry"
            value={values.industry}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(touched.industry && errors.industry)}
            aria-describedby={errors.industry ? 'error-industry' : undefined}
            className={`${inputBase} ${getBorderClass('industry')}`}
          >
            <option value="">Select your industry</option>
            {INDUSTRY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {touched.industry && errors.industry && (
            <p id="error-industry" className="mt-1.5 flex items-center gap-1 text-xs font-medium text-regulus-accent-text">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.industry}</span>
            </p>
          )}
        </div>

        {/* Service Required */}
        <div>
          <label
            htmlFor="enquiry-service"
            className="block text-xs font-semibold uppercase tracking-wide text-regulus-text"
          >
            Service Required <span className="text-regulus-accent-text">*</span>
          </label>
          <select
            id="enquiry-service"
            name="service"
            value={values.service}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(touched.service && errors.service)}
            aria-describedby={errors.service ? 'error-service' : undefined}
            className={`${inputBase} ${getBorderClass('service')}`}
          >
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {touched.service && errors.service && (
            <p id="error-service" className="mt-1.5 flex items-center gap-1 text-xs font-medium text-regulus-accent-text">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.service}</span>
            </p>
          )}
        </div>

        {/* Project Description */}
        <div className="sm:col-span-2">
          <label
            htmlFor="enquiry-description"
            className="block text-xs font-semibold uppercase tracking-wide text-regulus-text"
          >
            Project Description <span className="text-regulus-accent-text">*</span>
          </label>
          <textarea
            id="enquiry-description"
            name="description"
            rows={5}
            placeholder="Outline your business workflows, current bottlenecks, target users, or website goals..."
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(touched.description && errors.description)}
            aria-describedby={errors.description ? 'error-description' : undefined}
            className={`${inputBase} resize-y ${getBorderClass('description')}`}
          />
          {touched.description && errors.description && (
            <p id="error-description" className="mt-1.5 flex items-center gap-1 text-xs font-medium text-regulus-accent-text">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.description}</span>
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-regulus-border pt-5 sm:flex-row sm:items-center">
        <p className="text-xs leading-relaxed text-regulus-faint">
          Fields marked with <span className="text-regulus-accent-text">*</span> are required.
          {!import.meta.env.VITE_CONTACT_ENDPOINT &&
            ' Currently running in local validation preview until a backend endpoint is connected.'}
        </p>

        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={status === 'submitting'}
          className="w-full shrink-0 sm:w-auto"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Validating...
            </>
          ) : (
            'Submit Project Enquiry'
          )}
        </Button>
      </div>
    </form>
  );
}
