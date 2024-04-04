import toast from 'react-hot-toast'

export const createToast = () => {
	toast.success('Операция создания прошла успешно')
}

export const editToast = () => {
	toast.success('Операция изменения прошла успешно')
}

export const deleteToast = () => {
	toast.success('Операция удаления прошла успешно')
}
export const authToast = () => {
	toast.success('Авторизация прошла успешно')
}

export const reportToast = () => {
	toast.success('Отчёт сформирован успешно')
}
