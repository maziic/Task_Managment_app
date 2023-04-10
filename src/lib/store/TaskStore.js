import { v4 as uuidv4 } from 'uuid';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const data = browser ? JSON.parse(window.localStorage.getItem('st-task-list')) ?? [] : [];

export const tasks = writable(data);

tasks.subscribe((value) => {
	if (browser) {
		localStorage.setItem('st-task-list', JSON.stringify(value));
	}
});

export const addTask = () => {
	tasks.update((currentTasks) => {
		return [...currentTasks, { id: uuidv4(), text: '', complete: false }];
	});
};

export const deleteTask = (id) => {
	tasks.update((currentTasks) => {
		return currentTasks.filter((task) => task.id !== id);
	});
};

export const toggleComplete = (id) => {
	tasks.update((currentTasks) => {
		return currentTasks.map((task) => {
			if (task.id === id) {
				return { ...task, complete: !task.complete };
			}
			return task;
		});
	});
};

export const editTask = (id, text) => {
	tasks.update((currentTasks) => {
		return currentTasks.map((task) => {
			if (task.id === id) {
				return { ...task, text };
			}
			return task;
		});
	});
};
