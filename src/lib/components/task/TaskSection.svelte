<script>
	import TaskInput from './TaskInput.svelte';

	import { tasks } from '../../store/TaskStore';
</script>

<section class="mt-8 space-y-4">
	{#each $tasks as task (task.id)}
		<TaskInput {task} />
	{/each}
</section>
