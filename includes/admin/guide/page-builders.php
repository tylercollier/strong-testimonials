<div class="guide-content page-builders">

	<?php do_action( 'wpmtst_guide_before_content' ); ?>

	<section>
		<h3>Page Builder Integration Continues</h3>

		<p>Drag-and-drop page builder plugins and themes store content differently. This plugin has to find its shortcodes in each page in order to know which stylesheets and scripts to load.</p>
		
		<p>This <strong>conditional loading</strong> is a best practice that improves your site's speed. Without it, all the plugin's stylesheets and scripts, like the slideshow and pagination, would be loaded on <em>every page</em> even if they were not needed, resulting in slow, bloated pages.</p>

		<p>(I wonder how much internet bandwidth is used for sites without conditional loading?)</p>

		<p><a href="https://www.wpmission.com/contact" target="_blank">Contact me</a> to suggest a page builder.</p>

		<table class="guide compat">
			<tr>
				<th class="works">Works!</th>
				<th class="conflict">Conflict</th>
				<th class="request">Requested</th>
			</tr>

			<tr>
				<td class="works">
					<ol>
						<li><a href="https://wordpress.org/plugins/aqua-page-builder/" target="_blank" rel="nofollow">Aqua Page Builder</a></li>
						<li><a href="http://www.kriesi.at/theme-overview" target="_blank" rel="nofollow">Avia Framework & Enfold theme</a></li>
						<li><a href="https://wordpress.org/plugins/black-studio-tinymce-widget/" target="_blank" rel="nofollow">Black Studio TinyMCE Widget</a></li>
						<li><a href="http://www.elegantthemes.com/gallery/divi/" target="_blank" rel="nofollow">Elegant Page Builder & themes</a></li>
						<li><a href="http://goodlayers.com/" target="_blank" rel="nofollow">GoodLayers themes</a>
						<li><a href="https://thethemefoundry.com/wordpress-themes/make/" target="_blank" rel="nofollow">Make theme by Theme Foundry</a></li>
						<li><a href="https://www.optimizepress.com/" target="_blank" rel="nofollow">OptmizePress</a></li>
						<li><a href="https://wordpress.org/plugins/siteorigin-panels/" target="_blank" rel="nofollow">Page Builder by SiteOrigin</a></li>
						<li><a href="http://cyberchimps.com/responsive-theme/" target="_blank" rel="nofollow">Responsive theme by CyberChimps</a></li>
						<li><a href="http://vc.wpbakery.com/" target="_blank" rel="nofollow">Visual Composer by WPBakery</a>
						</li>
					</ol>
				</td>

				<td class="conflict">
					<ol>
						<li><a href="http://unyson.io/" target="_blank" rel="nofollow">Unyson Framework by ThemeFuse</a>
						</li>
					</ol>
				</td>

				<td class="request">
					<ol>
						<li>Beaver Builder</li>
						<li>Fast Page Layout</li>
						<li>Lasso</li>
						<li>Live Composer</li>
						<li>Layers by Obox</li>
						<li>Themify Builder</li>
						<li>Velocity Page</li>
						<li>Upfront by WPMU Dev</li>
					</ol>
				</td>
			</tr>
		</table>
	</section>

	<?php do_action( 'wpmtst_guide_after_content' ); ?>

</div>
