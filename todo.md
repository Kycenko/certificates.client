1.Перенести всю логику из DetailsPages в отдельные компоненты []
2.GroupData - переделать отображение таблицы для пользователя []

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HistoryItem {
id: string | number;
oldName: string;
newName: string;
}

interface HistoryState {
history: HistoryItem[];
}

const initialState: HistoryState = {
history: [],
};

const historySlice = createSlice({
name: 'history',
initialState,
reducers: {
addHistoryItem: (state, action: PayloadAction<HistoryItem>) => {
state.history.push(action.payload);
},
},
});

export const { addHistoryItem } = historySlice.actions;

export default historySlice.reducer;

import { useDispatch } from 'react-redux';
import { addHistoryItem } from './historySlice';

// ...

const handleEdit = (id: string | number, data: TypeHealthGroupForm) => {
const oldName = data.find(item => item.id === id)?.name;
if (oldName && oldName !== data.name) {
dispatch(addHistoryItem({ id, oldName, newName: data.name }));
}
onEdit(id, data);
setEditId(null);
};
