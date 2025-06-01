'use client'

import { Avatar } from '@radix-ui/react-avatar'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { CalendarIcon, ClockIcon } from 'lucide-react'

import { AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Dialog } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { doctorsTable } from '@/db/schema'
import { formatCurrencyInCents } from '@/helpers/currency'

import { getAvailability } from '../_helpers/availabilty'
import UpsertDoctorForm from './upsert-doctor-form'

type DoctorProps = {
  doctor: typeof doctorsTable.$inferSelect
}

const DoctorCard = ({ doctor }: DoctorProps) => {
  const doctorsInitials = doctor.name
    .split(' ')
    .map((name) => name[0])
    .join('')

  const availability = getAvailability(doctor)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Avatar className="h-10 w-10">
            <AvatarFallback>{doctorsInitials}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-sm font-medium">{doctor.name}</h3>
            <p className="text-muted-foreground text-sm">{doctor.specialty}</p>
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col gap-2">
        <Badge variant="outline">
          <CalendarIcon className="mr-1" />
          {availability.from.format('dddd')} a {availability.to.format('dddd')}
        </Badge>
        <Badge variant="outline">
          <ClockIcon className="mr-1" />
          {doctor.availableFromTime} às {doctor.availableToTime}
        </Badge>
        <Badge variant="outline">
          {formatCurrencyInCents(doctor.appointmentPriceInCents)}
        </Badge>
      </CardContent>
      <Separator />
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">Ver Detalhes</Button>
          </DialogTrigger>
          <UpsertDoctorForm />
        </Dialog>
      </CardFooter>
    </Card>
  )
}

export default DoctorCard
