import { apiClient } from './client'

export async function postSiteContent(language, content) {
  const response = await apiClient.post('/workintech', { language, content })
  return response.data
}
