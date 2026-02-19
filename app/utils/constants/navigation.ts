import type { NavigationMenuItem } from "@nuxt/ui";
import { Permission } from "../types/permission";

export const navigationItems: NavigationMenuItem[][] = [[{
  label: 'Dashboard',
  icon: 'i-lucide-house',
  permission: Permission.Dashboard_View,
  active: true
}, {
  label: 'Orders',
  icon: 'i-lucide-inbox',
  permission: Permission.Orders_View,
  active: false
}, {
  label: 'Production',
  permission: Permission.Production_View,
  icon: 'i-lucide-users'
}, {
  label: 'Inventory',
  icon: 'i-lucide-settings',
  permission: Permission.Inventory_View,
  defaultOpen: true,
  children: [{
    label: 'General'
  }, {
    label: 'Members'
  }, {
    label: 'Notifications'
  }]
}, {
  label: 'Quality Control',
  icon: 'i-lucide-settings',
  permission: Permission.QualityControl_View,
  defaultOpen: true,
  children: [{
    label: 'General'
  }, {
    label: 'Members'
  }, {
    label: 'Notifications'
  }]
}, {
  label: 'Logistics',
  icon: 'i-lucide-settings',
  permission: Permission.Logistics_View,
  defaultOpen: true,
  children: [{
    label: 'General'
  }, {
    label: 'Members'
  }, {
    label: 'Notifications'
  }]
}, {
  label: 'Reports',
  icon: 'i-lucide-settings',
  permission: Permission.Reports_View,
  defaultOpen: true,
  children: [{
    label: 'General'
  }, {
    label: 'Members'
  }, {
    label: 'Notifications'
  }]
}, {
  label: 'System',
  icon: 'i-lucide-settings',
  permission: Permission.System_View,
  defaultOpen: true,
  children: [{
    label: 'General'
  }, {
    label: 'Members'
  }, {
    label: 'Notifications'
  }]
}], [{
  label: 'Feedback',
  icon: 'i-lucide-message-circle',
  to: 'https://github.com/nuxt-ui-templates/dashboard',
  target: '_blank'
}, {
  label: 'Help & Support',
  icon: 'i-lucide-info',
  to: 'https://github.com/nuxt/ui',
  target: '_blank'
}]]