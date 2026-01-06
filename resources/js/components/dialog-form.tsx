import * as React from "react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type DialogProps = {
	title: string,
	description: string,
	form?: 'kelas' | 'siswa' | 'guru';
    type?: 'post' | 'put' | 'delete';
}

export function DialogForm({ type, description, title, form }: DialogProps) {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="default">{title}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {form === 'kelas' ? (
          	<FormKelas/>
          	):form === 'siswa' && (
          	<FormSiswa/>
          	)}
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="default">{title}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DrawerDescription>
        </DrawerHeader>
        {form === "kelas" ? (
        	<FormKelas className="px-4" />
        	):form === 'siswa' && (
          	<FormSiswa className="px-4"/>
          	)}
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function FormKelas({ className }: React.ComponentProps<"form">) {
  return(
  		<form className={cn("grid items-start gap-6", className)}>
          <div className="grid gap-3">
            <Label htmlFor="kelas">Kelas</Label>
            <Select>
			  <SelectTrigger className="w-full">
			    <SelectValue placeholder="Kelas" />
			  </SelectTrigger>
			  <SelectContent>
			    <SelectItem value="X">X</SelectItem>
			    <SelectItem value="XI">XI</SelectItem>
			    <SelectItem value="XII">XII</SelectItem>
			  </SelectContent>
			</Select>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="jurusan">Jurusan</Label>
            <Input id="jurusan" defaultValue="RPL" />
          </div>
          <Button type="submit">Save changes</Button>
        </form>
  	);
}

function FormSiswa({ className }: React.ComponentProps<"form">) {
  return(
  		<form className={cn("grid items-start gap-6", className)}>
          <div className="grid gap-3">
            <Label htmlFor="kelas">Nama</Label>
            <Select>
			  <SelectTrigger className="w-full">
			    <SelectValue placeholder="Nama" />
			  </SelectTrigger>
			  <SelectContent>
			    <SelectItem value="Siswa1">Siswa1</SelectItem>
			    <SelectItem value="Siswa2">Siswa2</SelectItem>
			    <SelectItem value="Siswa3">Siswa3</SelectItem>
			  </SelectContent>
			</Select>
          </div>
          <Button type="submit">Save changes</Button>
        </form>
  	);
}