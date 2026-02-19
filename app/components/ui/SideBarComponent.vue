<script setup lang="ts">
import { navigationItems } from '~/utils/constants/navigation'
const auth = useAuthStore();

const items = computed(() =>
  navigationItems.map(group =>
    group.filter(item =>
      auth.hasPermission(item.permission)
    )
  )
)

const logout = useUseLogout();
</script>

<template>
  <UDashboardSidebar collapsible resizable :ui="{ footer: 'border-t border-default' }">
    <template #header="{ collapsed }">
      <UIcon name="i-simple-icons-nuxtdotjs" class="size-5 text-primary mx-auto" />
    </template>

    <template #default="{ collapsed }">
      <UButton
        :label="collapsed ? undefined : 'Search...'"
        icon="i-lucide-search"
        color="neutral"
        variant="outline"
        block
        :square="collapsed"
      >
        <template v-if="!collapsed" #trailing>
          <div class="flex items-center gap-0.5 ms-auto">
            <UKbd value="meta" variant="subtle" />
            <UKbd value="K" variant="subtle" />
          </div>
        </template>
      </UButton>

      <UNavigationMenu
        :collapsed="collapsed"
        :items="items[0]"
        orientation="vertical"
      />

      <UNavigationMenu
        :collapsed="collapsed"
        :items="items[1]"
        orientation="vertical"
        class="mt-auto"
      />
    </template>

    <template #footer="{ collapsed }">
      <UButton
        :avatar="{
          src: 'https://github.com/benjamincanac.png'
        }"
        :label="auth.user?.user"
        color="neutral"
        variant="ghost"
        class="w-full"
        :block="collapsed"
      />
      <UButton @click="logout">
        Logout
      </UButton>
    </template>
  </UDashboardSidebar>
</template>

