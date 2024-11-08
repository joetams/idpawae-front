<template>
	<div class="container">
		<div class="row">
			<div class="col" style="margin:2vh 2vw;">
				<h1 class="title">GabFarm</h1>
			</div>
			<div style="margin:4vh 2vw;">
				<IconField>
					<InputText style="width:20vw;" placeholder="Search" />
					<InputIcon class="pi pi-search" />
				</IconField>
			</div>
			<div style="margin:4vh 1vw;">
				<OverlayBadge value="2">
					<i class="pi pi-shopping-cart" style="font-size: 2rem;"></i>
				</OverlayBadge>
			</div>
			<div style="text-align: end; margin-top: 4vh;">
				<h3 class="nav-links">Products</h3>
				<h3 class="nav-links">Resources</h3>
				<h3 class="nav-links">Contact Us</h3>
        	</div>
			<div style="margin:2vh 1vw;">
				<Avatar label="P" class="mr-2" size="xlarge" shape="circle" />
			</div>
		</div>
	</div>
</template>

<style scoped>
	.container {
		position:fixed;
		top:0;
		background-color: var(--nav-bar);
		height: 12vh;
		width: 100%;
	}
	.title {
		color:black;
	}
	.nav-links {
		display: inline;
		padding: 0px 20px;
		font-weight: 550;
	}
</style>
