import { API_BASE_URL } from "utils";

export async function queryApi<T>(url: string): Promise<T> {
  const res = await fetch(API_BASE_URL + url);
  const data: T = await res.json();
  return data;
}
