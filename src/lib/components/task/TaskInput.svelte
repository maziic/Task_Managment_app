<script>
	import { deleteTask, toggleComplete, editTask } from '../../store/TaskStore';

	export let task;

	$: completeClass = task.complete ? 'bg-green-three' : 'bg-yellow';
	$: completeClassbox = task.complete ? 'bg-lightblue' : 'bg-lightyellow';
</script>

<div
	class="{completeClassbox} flex items-center justify-between rounded-md border-2 border-gray-one px-5 py-4"
>
	<div class="flex w-full max-w-lg items-center justify-start">
		<label for={`${task.id}-checkbox`} class="sr-only">Complete task</label>
		<input
			id={`${task.id}-checkbox`}
			type="checkbox"
			checked={task.complete}
			on:change={() => toggleComplete(task.id)}
			class="h-4 w-4 rounded border border-gray-three text-green-four focus:border-green-five focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-green-five"
		/>
		<label for={`${task.id}-text`} class="sr-only">Edit task</label>
		<input
			id={`${task.id}-text`}
			type="text"
			placeholder="Enter a task"
			value={task.text}
			on:input={(e) => editTask(task.id, e.target.value)}
			class="border-b-gray-twopx-0 ml-5 flex-1 text-ellipsis rounded border-x-0 border-t-0 border-b border-dashed pb-1 text-base font-normal text-gray-three placeholder:text-gray-two focus:border-gray-three focus:outline-none focus:ring-0"
		/>
		<span
			class="{completeClass} ml-5 hidden rounded-full py-0.5 px-2 text-sm font-normal text-gray-five md:block"
		>
			{task.complete ? 'Complete' : 'In Progress'}
		</span>
	</div>
	<button
		type="button"
		on:click={() => deleteTask(task.id)}
		class="group ml-4 flex items-center justify-center rounded-md bg-{completeClassbox} p-2 hover:bg-gray-two focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-five"
	>
		<span class="sr-only">Delete task</span>
		<svg
			class="h-5 w-5 text-gray-three group-hover:text-gray-five"
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clip-path="url(#clip0_35_392)">
				<path
					d="M24 6.4H32V9.6H28.8V30.4C28.8 30.8244 28.6314 31.2313 28.3314 31.5314C28.0313 31.8314 27.6243 32 27.2 32H4.8C4.37565 32 3.96869 31.8314 3.66863 31.5314C3.36857 31.2313 3.2 30.8244 3.2 30.4V9.6H0V6.4H8V1.6C8 1.17565 8.16857 0.768688 8.46863 0.468629C8.76869 0.168571 9.17565 0 9.6 0H22.4C22.8243 0 23.2313 0.168571 23.5314 0.468629C23.8314 0.768688 24 1.17565 24 1.6V6.4ZM25.6 9.6H6.4V28.8H25.6V9.6ZM18.2624 19.2L21.0912 22.0288L18.8288 24.2912L16 21.4624L13.1712 24.2912L10.9088 22.0288L13.7376 19.2L10.9088 16.3712L13.1712 14.1088L16 16.9376L18.8288 14.1088L21.0912 16.3712L18.2624 19.2ZM11.2 3.2V6.4H20.8V3.2H11.2Z"
					fill="currentColor"
				/>
			</g>
			<defs>
				<clipPath id="clip0_35_392">
					<rect width="32" height="32" fill="white" />
				</clipPath>
			</defs>
		</svg>
	</button>
</div>
