'use client'
import * as ScrollAria from '@radix-ui/react-scroll-area'
import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
import { TabItem } from './TabItem'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab01')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollAria.Root className="w-full " type="scroll">
        <ScrollAria.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
            <TabItem
              title="My details"
              value="tab01"
              isSelected={currentTab === 'tab01'}
            />
            <TabItem
              title="Profile"
              value="tab02"
              isSelected={currentTab === 'tab02'}
            />
            <TabItem
              title="Password "
              value="tab03"
              isSelected={currentTab === 'tab03'}
            />
            <TabItem
              title="Team"
              value="tab04"
              isSelected={currentTab === 'tab04'}
            />
            <TabItem
              title="Plan"
              value="tab05"
              isSelected={currentTab === 'tab05'}
            />
            <TabItem
              title="Billing"
              value="tab06"
              isSelected={currentTab === 'tab06'}
            />
            <TabItem
              title="Email"
              value="tab07"
              isSelected={currentTab === 'tab07'}
            />
            <TabItem
              title="Notifications"
              value="tab08"
              isSelected={currentTab === 'tab08'}
            />
            <TabItem
              title="Integrations"
              value="tab09"
              isSelected={currentTab === 'tab09'}
            />
            <TabItem
              title="API"
              value="tab10"
              isSelected={currentTab === 'tab10'}
            />
          </Tabs.List>
        </ScrollAria.Viewport>

        <ScrollAria.Scrollbar
          orientation="horizontal"
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100 "
        >
          <ScrollAria.Thumb className="relative flex-1  rounded-lg bg-zinc-300" />
        </ScrollAria.Scrollbar>
      </ScrollAria.Root>
    </Tabs.Root>
  )
}
