'use client'

import { DialogTrigger } from '@radix-ui/react-dialog'
import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'

import UpserDoctorForm from './upsert-doctor-form'

const AddDoctorButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer">
          <Plus />
          Adicionar médico
        </Button>
      </DialogTrigger>
      <UpserDoctorForm />
    </Dialog>
  )
}

export default AddDoctorButton
