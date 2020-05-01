/*
 * @Author: 柒叶
 * @Date: 2020-04-29 18:04:12
 * @Last Modified by: 柒叶
 * @Last Modified time: 2020-05-01 17:41:41
 */
import { stringify } from 'qs'
import request from '@/utils/request'

// 获取评论

export async function getComments() {
  return request('/api/admin/comments')
}

// 获取分类列表
export async function getCategories() {
  return request('/api/admin/categories')
}

// 删除分类
export async function deleteCategory(data) {
  return request('/api/admin/delete/category', {
    method: 'POST',
    data,
  })
}

// 添加分类
export async function createCategory(data) {
  return request('/api/admin/create/category', {
    method: 'POST',
    data,
  })
}

// 获取标签列表
export async function getTags() {
  return request('/api/admin/tags')
}

// 删除标签
export async function deleteTag(data) {
  return request('/api/admin/delete/tag', {
    method: 'POST',
    data,
  })
}

// 添加标签
export async function createTag(data) {
  return request('/api/admin/create/tag', {
    method: 'POST',
    data,
  })
}
