import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Eye, EyeOff } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}

const SignUpModal = ({ isOpen, onClose, onSwitchToSignIn }) => {
  const { language } = useLanguage()
  const contentMap = {
    en: {
      title: 'Register',
      closeAria: 'Close registration form',
      firstNameLabel: 'First Name',
      firstNamePlaceholder: 'Enter First Name',
      lastNameLabel: 'Last Name',
      lastNamePlaceholder: 'Enter Last Name',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Enter Password',
      confirmPasswordLabel: 'Confirm Password',
      confirmPasswordPlaceholder: 'Re-enter Password',
      stateLabel: 'State',
      statePlaceholder: '--Select State--',
      phoneLabel: 'Phone No',
      phonePlaceholder: 'Enter Phone No',
      emailLabel: 'Email',
      emailPlaceholder: 'abc@example.com',
      stakeholderLabel: 'Stakeholder Type',
      stakeholderPlaceholder: '--Select--',
      productLabel: 'Products of Interest',
      productPlaceholder: '--Select--',
      submitButton: 'Create Account',
      switchPrompt: 'Already have an account?',
      switchButton: 'Sign in',
      passwordToggleAria: 'Toggle password visibility'
    },
    hi: {
      title: 'रजिस्टर करें',
      closeAria: 'पंजीकरण फॉर्म बंद करें',
      firstNameLabel: 'पहला नाम',
      firstNamePlaceholder: 'पहला नाम दर्ज करें',
      lastNameLabel: 'अंतिम नाम',
      lastNamePlaceholder: 'अंतिम नाम दर्ज करें',
      passwordLabel: 'पासवर्ड',
      passwordPlaceholder: 'पासवर्ड दर्ज करें',
      confirmPasswordLabel: 'पासवर्ड की पुष्टि करें',
      confirmPasswordPlaceholder: 'पासवर्ड दोबारा दर्ज करें',
      stateLabel: 'राज्य',
      statePlaceholder: '--राज्य चुनें--',
      phoneLabel: 'फ़ोन नंबर',
      phonePlaceholder: 'फ़ोन नंबर दर्ज करें',
      emailLabel: 'ईमेल',
      emailPlaceholder: 'abc@example.com',
      stakeholderLabel: 'हितधारक प्रकार',
      stakeholderPlaceholder: '--चयन करें--',
      productLabel: 'रुचि वाले उत्पाद',
      productPlaceholder: '--चयन करें--',
      submitButton: 'खाता बनाएं',
      switchPrompt: 'पहले से खाता है?',
      switchButton: 'साइन इन करें',
      passwordToggleAria: 'पासवर्ड दृश्यता बदलें'
    }
  }

  const content = contentMap[language] || contentMap.en

  const [formData, setFormData] = useState(initialFormState)
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Placeholder submit handler; connect to backend when available
    onClose()
    setFormData(initialFormState)
    setShowPassword(false)
  }

  const handleClose = () => {
    onClose()
    setFormData(initialFormState)
    setShowPassword(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="relative w-full max-w-md"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 200, damping: 24 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="bg-white rounded-3xl shadow-custom-strong overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-900">{content.title}</h2>
                <button
                  type="button"
                  onClick={handleClose}
                  className="p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
                  aria-label={content.closeAria}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="px-6 py-6 lg:py-8 bg-white">
                <div className="space-y-5">
                  <InputField
                    label={content.firstNameLabel}
                    name="firstName"
                    placeholder={content.firstNamePlaceholder}
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />

                  <InputField
                    label={content.lastNameLabel}
                    name="lastName"
                    placeholder={content.lastNamePlaceholder}
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />

                  <InputField
                    label={content.emailLabel}
                    name="email"
                    type="email"
                    placeholder={content.emailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <PasswordField
                    label={content.passwordLabel}
                    name="password"
                    placeholder={content.passwordPlaceholder}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    isVisible={showPassword}
                    onToggleVisibility={() => setShowPassword((prev) => !prev)}
                    toggleAria={content.passwordToggleAria}
                  />
                </div>

                <div className="mt-8 space-y-4">
                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    {content.submitButton}
                  </button>
                  <p className="text-sm text-center text-gray-600">
                    {content.switchPrompt}{' '}
                    <button
                      type="button"
                      className="text-primary-600 font-semibold hover:underline"
                      onClick={() => {
                        handleClose()
                        onSwitchToSignIn()
                      }}
                    >
                      {content.switchButton}
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const InputField = ({ label, name, type = 'text', value, onChange, placeholder, required }) => (
  <label className="flex flex-col space-y-2 text-sm font-medium text-gray-700">
    <span>
      {label}{required && <span className="text-red-500"> *</span>}
    </span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-100"
    />
  </label>
)

const PasswordField = ({ label, name, value, onChange, placeholder, required, isVisible, onToggleVisibility, toggleAria }) => (
  <label className="flex flex-col space-y-2 text-sm font-medium text-gray-700">
    <span>
      {label}{required && <span className="text-red-500"> *</span>}
    </span>
    <div className="relative">
      <input
        type={isVisible ? 'text' : 'password'}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 pr-12 text-gray-700 placeholder-gray-400 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-100"
      />
      <button
        type="button"
        onClick={onToggleVisibility}
        className="absolute inset-y-0 right-3 flex items-center text-gray-500"
        aria-label={toggleAria}
      >
        {isVisible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
      </button>
    </div>
  </label>
)

export default SignUpModal
