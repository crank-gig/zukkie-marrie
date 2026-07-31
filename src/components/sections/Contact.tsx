import React, { useState } from 'react';
import { AlertCircleIcon, CheckCircle2Icon, Loader2Icon, MailIcon, MapPinIcon, SendIcon } from 'lucide-react';
import { COMPANY, CONTACT_INTERESTS, OFFICES } from '../data/company';
import { Section } from '../ui/Section.tsx';
import { SectionHeading } from '../ui/SectionHeading.tsx';
import { Reveal } from '../ui/Reveal.tsx';
import { Button } from '../ui/Button.tsx';
import { IconBadge } from '../ui/IconBadge.tsx';

interface FormValues {
  name: string;
  organisation: string;
  email: string;
  interest: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;
type Status = 'idle' | 'submitting' | 'success';

const EMPTY: FormValues = { name: '', organisation: '', email: '', interest: '', message: '' };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Please tell us your name.';
  if (!values.email.trim()) errors.email = 'An email address is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = 'Enter a valid email address.';
  if (!values.interest) errors.interest = 'Select an area of interest.';
  if (values.message.trim().length < 20) errors.message = 'Please provide at least 20 characters of detail.';
  return errors;
}

const FIELD_CLASS =
  'mt-2 w-full rounded-xl border border-navy-900/12 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 transition-colors duration-300 focus:border-gold-500 focus:outline-none';

export function Contact() {
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  const update = (field: keyof FormValues) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('submitting');

    // Build mailto: URL so the user's mail client opens with the enquiry pre-filled
    const subject = `Enquiry from ${values.name || 'Website'} - ${values.interest}`;
    const bodyLines = [
      `Name: ${values.name}`,
      `Organisation: ${values.organisation || 'N/A'}`,
      `Email: ${values.email}`,
      `Area of interest: ${values.interest}`,
      '',
      values.message,
    ];
    const body = bodyLines.join('\r\n');
    const mailto = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      body,
    )}`;

    // Open user's default mail client with the prefilled message. Use location.assign so
    // it works in most environments, falling back to window.open.
    try {
      window.location.assign(mailto);
    } catch (e) {
      window.open(mailto, '_blank');
    }

    setStatus('success');
    setValues(EMPTY);
  };

  return (
    <Section id="contact" tone="white">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Get in touch"
            title="Start a Conversation"
            lead="Tell us about your project, partnership or investment interest and our team will respond from the Benin City head office."
          />

          <Reveal delay={0.08}>
            <a
              href={`mailto:${COMPANY.email}`}
              className="mt-10 flex items-center gap-4 rounded-2xl border border-navy-900/8 bg-navy-100/50 p-5 transition-colors duration-300 hover:border-gold-500/40"
            >
              <IconBadge icon={MailIcon} variant="navy" />
              <span>
                <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-navy-500">
                  Email
                </span>
                <span className="mt-1 block break-all text-sm font-medium text-navy-900">{COMPANY.email}</span>
              </span>
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            <a
              href={`mailto:${COMPANY.email}`}
              className="mt-10 flex items-center gap-4 rounded-2xl border border-navy-900/8 bg-navy-100/50 p-5 transition-colors duration-300 hover:border-gold-500/40"
            >
              <IconBadge icon={MailIcon} variant="navy" />
              <span>
                <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-navy-500">
                  Telephone
                </span>
                <span className="mt-1 block break-all text-sm font-medium text-navy-900">{COMPANY.telephone}</span>
              </span>
            </a>
          </Reveal>

          <ul className="mt-6 space-y-4">
            {OFFICES.map((office, index) => (
              <Reveal as="li" key={office.id} delay={0.1 + index * 0.05} className="flex gap-4">
                <IconBadge icon={MapPinIcon} variant="outline" size="sm" />
                <div>
                  <p className="text-sm font-semibold text-navy-900">{office.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-navy-600">{office.address}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.12}>
          <div className="rounded-3xl border border-navy-900/8 bg-white p-7 shadow-card sm:p-9">
            {status === 'success' ? (
              <div className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center">
                <IconBadge icon={CheckCircle2Icon} variant="gold" size="lg" />
                <h3 className="mt-6 font-display text-2xl font-semibold text-navy-900">Enquiry received</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-navy-600">
                  Thank you for contacting ZUKKIE-MARIE LIMITED. A member of our team will respond to your
                  enquiry shortly.
                </p>
                <Button variant="secondary" className="mt-8" onClick={() => setStatus('idle')}>
                  Send another enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-navy-800">
                      Full name <span className="text-gold-600">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={update('name')}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={FIELD_CLASS}
                      placeholder="Your name"
                    />
                    {errors.name ? (
                      <p id="name-error" className="mt-2 flex items-center gap-1.5 text-xs text-red-700">
                        <AlertCircleIcon size={13} aria-hidden="true" />
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="organisation" className="text-sm font-medium text-navy-800">
                      Organisation
                    </label>
                    <input
                      id="organisation"
                      name="organisation"
                      type="text"
                      value={values.organisation}
                      onChange={update('organisation')}
                      className={FIELD_CLASS}
                      placeholder="Company or agency (optional)"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium text-navy-800">
                    Email address <span className="text-gold-600">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={update('email')}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={FIELD_CLASS}
                    placeholder="you@example.com"
                  />
                  {errors.email ? (
                    <p id="email-error" className="mt-2 flex items-center gap-1.5 text-xs text-red-700">
                      <AlertCircleIcon size={13} aria-hidden="true" />
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="interest" className="text-sm font-medium text-navy-800">
                    Area of interest <span className="text-gold-600">*</span>
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={values.interest}
                    onChange={update('interest')}
                    aria-invalid={Boolean(errors.interest)}
                    aria-describedby={errors.interest ? 'interest-error' : undefined}
                    className={FIELD_CLASS}
                  >
                    <option value="">Select an option</option>
                    {CONTACT_INTERESTS.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                  {errors.interest ? (
                    <p id="interest-error" className="mt-2 flex items-center gap-1.5 text-xs text-red-700">
                      <AlertCircleIcon size={13} aria-hidden="true" />
                      {errors.interest}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-navy-800">
                    How can we help? <span className="text-gold-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={update('message')}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`${FIELD_CLASS} resize-y`}
                    placeholder="Share the project scope, location and timeline."
                  />
                  {errors.message ? (
                    <p id="message-error" className="mt-2 flex items-center gap-1.5 text-xs text-red-700">
                      <AlertCircleIcon size={13} aria-hidden="true" />
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                <Button type="submit" disabled={status === 'submitting'} className="w-full sm:w-auto">
                  {status === 'submitting' ? (
                    <>
                      <Loader2Icon size={16} className="animate-spin" aria-hidden="true" />
                      Sending enquiry…
                    </>
                  ) : (
                    <>
                      Send enquiry
                      <SendIcon size={15} aria-hidden="true" />
                    </>
                  )}
                </Button>

                <p aria-live="polite" className="sr-only">
                  {status === 'submitting' ? 'Submitting your enquiry' : ''}
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
