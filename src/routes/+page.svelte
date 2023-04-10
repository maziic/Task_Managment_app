<script>
	import AddTaskSection from '../lib/components/task/AddTaskSection.svelte';
	import TaskSection from '../lib/components/task/TaskSection.svelte';
	import ProgressSection from '../lib/components/progress/ProgressSection.svelte';
</script>

<div class="min-h-screen bg-teal p-0 selection:bg-green-two md:py-24 md:px-8">
	<main
		class="mx-auto min-h-screen max-w-none rounded-none bg-cream px-5 py-10 outline-none md:min-h-max md:max-w-[60rem] md:rounded-2xl md:px-8 md:outline md:outline-4 md:outline-offset-8 md:outline-cream"
	>
		<h1
			class="rounded-md text-center text-2xl font-bold text-gray-three outline outline-2 outline-offset-2 outline-green-one md:py-4"
		>
			Task Manager
		</h1>
		<div class="mt-10">
			<AddTaskSection />
			<TaskSection />
			<ProgressSection />
		</div>
	</main>
</div>
