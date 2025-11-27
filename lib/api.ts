const API_BASE_URL = "https://baseurl.com"

interface ApiClientOptions extends RequestInit {
  requiresAuth?: boolean
}

async function apiRequest<T>(endpoint: string, options: ApiClientOptions = {}): Promise<T> {
  const { requiresAuth = true, ...fetchOptions } = options

  const headers = new Headers(fetchOptions.headers || {})

  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json")
  }

  if (requiresAuth) {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null
    if (token) {
      headers.set("Authorization", `Bearer ${token}`)
    }
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...fetchOptions,
    headers,
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }

  return response.json()
}

// Auth API
export const authApi = {
  login: async (email: string, password: string) => {
    return apiRequest<{ token: string; user: any }>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      requiresAuth: false,
    })
  },

  register: async (name: string, email: string, password: string) => {
    return apiRequest<{ token: string; user: any }>("/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      requiresAuth: false,
    })
  },
}

// CV API
export const cvApi = {
  getAll: async () => {
    return apiRequest<{ cvs: any[] }>("/cvs")
  },

  getById: async (id: string) => {
    return apiRequest<any>(`/cvs/${id}`)
  },

  create: async (cvData: any) => {
    return apiRequest<any>("/cvs", {
      method: "POST",
      body: JSON.stringify(cvData),
    })
  },

  update: async (id: string, cvData: any) => {
    return apiRequest<any>(`/cvs/${id}`, {
      method: "PUT",
      body: JSON.stringify(cvData),
    })
  },

  delete: async (id: string) => {
    return apiRequest<void>(`/cvs/${id}`, {
      method: "DELETE",
    })
  },
}

// AI API
export const aiApi = {
  optimize: async (content: string, jobDescription: string) => {
    return apiRequest<{ optimizedContent: string }>("/ai/optimize", {
      method: "POST",
      body: JSON.stringify({ content, jobDescription }),
    })
  },
}

// Import API
export const importApi = {
  parseText: async (text: string) => {
    return apiRequest<any>("/import/parse-text", {
      method: "POST",
      body: JSON.stringify({ text }),
    })
  },

  parseDocument: async (file: File) => {
    const formData = new FormData()
    formData.append("file", file)

    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null
    const headers = new Headers()
    if (token) {
      headers.set("Authorization", `Bearer ${token}`)
    }

    const response = await fetch(`${API_BASE_URL}/import/parse-document`, {
      method: "POST",
      headers,
      body: formData,
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    return response.json()
  },

  linkedIn: async (linkedInUrl: string) => {
    return apiRequest<any>("/import/linkedin", {
      method: "POST",
      body: JSON.stringify({ linkedInUrl }),
    })
  },
}

// Billing API
export const billingApi = {
  getPlans: async () => {
    return apiRequest<{ plans: any[] }>("/billing/plans")
  },

  getSubscription: async () => {
    return apiRequest<{ subscription: any }>("/billing/subscription")
  },

  upgrade: async (planId: string) => {
    return apiRequest<{ checkoutUrl: string }>("/billing/upgrade", {
      method: "POST",
      body: JSON.stringify({ planId }),
    })
  },

  getCustomerPortal: async () => {
    return apiRequest<{ portalUrl: string }>("/billing/customer-portal", {
      method: "POST",
    })
  },
}

// User API
export const userApi = {
  getSettings: async () => {
    return apiRequest<any>("/users/settings")
  },

  updateSettings: async (settings: any) => {
    return apiRequest<any>("/users/settings", {
      method: "PUT",
      body: JSON.stringify(settings),
    })
  },

  updateProfile: async (profile: any) => {
    return apiRequest<any>("/users/profile", {
      method: "PUT",
      body: JSON.stringify(profile),
    })
  },

  changePassword: async (currentPassword: string, newPassword: string) => {
    return apiRequest<void>("/users/change-password", {
      method: "PUT",
      body: JSON.stringify({ currentPassword, newPassword }),
    })
  },

  updatePreferences: async (preferences: any) => {
    return apiRequest<any>("/users/preferences", {
      method: "PUT",
      body: JSON.stringify(preferences),
    })
  },

  deleteAccount: async () => {
    return apiRequest<void>("/users/account", {
      method: "DELETE",
    })
  },
}
